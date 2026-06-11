import type {
  ListingPage,
  ProductDocument,
  ProductProps,
  SiteSettings,
} from '../../types';
import { client } from '../utils/sanityClient';
import { getSiteSettings } from './global';

const productFields = /* groq */ `
  title,
  slug,
  listingId,
  state,
  url,
  price,
  priceAmount,
  currencyCode,
  description,
  metaDescription,
  image,
  sortOrder
`;

const productListQuery = /* groq */ `
  *[
    !(_id in path("drafts.**")) &&
    _type == 'product' &&
    state == 'active'
  ] | order(sortOrder asc) {
    ${productFields}
  }
`;

function processProductPath(slug: string): string {
  return `/shop/product/${slug}/`;
}

function proccessProduct(
  product: ProductDocument,
  siteSettings: SiteSettings,
): ProductProps {
  const {
    title,
    slug,
    listingId,
    state,
    url,
    price,
    priceAmount,
    currencyCode,
    description,
    metaDescription,
    image,
  } = product;

  return {
    title,
    price,
    description,
    currencyCode,
    path: processProductPath(slug),
    slug,
    url,
    listingId,
    state,
    image,
    meta: {
      title: `${title} | Shop | ${siteSettings.title}`,
      description: metaDescription,
      og: {
        image: image.src,
      },
      jsonLd: {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: title,
        image: image.src,
        description: metaDescription,
        brand: {
          '@type': 'Brand',
          name: 'Sally Payne',
        },
        offers: {
          '@type': 'AggregateOffer',
          price: priceAmount,
          lowPrice: priceAmount,
          priceCurrency: currencyCode,
        },
      },
    },
  };
}

export async function getProduct(
  slug: string,
): Promise<ProductProps | undefined> {
  const siteSettings = await getSiteSettings();
  const response = await client.fetch<ProductDocument | null>(
    /* groq */ `
    *[
      !(_id in path("drafts.**")) &&
      _type == 'product' &&
      state == 'active' &&
      slug == $slug
    ][0] {
      ${productFields}
    }
  `,
    { slug },
  );
  if (!response) {
    return undefined;
  }
  return proccessProduct(response, siteSettings);
}

export async function getProductsPage(
  pageNumber: number,
  pageSize = 20,
): Promise<ListingPage<ProductProps> | undefined> {
  const siteSettings = await getSiteSettings();
  const products = await client.fetch<ProductDocument[]>(productListQuery);
  const lastPage = Math.max(1, Math.ceil(products.length / pageSize));
  if (pageNumber < 1 || pageNumber > lastPage) {
    return undefined;
  }
  const start = (pageNumber - 1) * pageSize;
  return {
    data: products
      .slice(start, start + pageSize)
      .map((product) => proccessProduct(product, siteSettings)),
    currentPage: pageNumber,
    lastPage,
  };
}
