import type { PaginateFunction } from 'astro';
import { decode } from 'html-entities';
import type {
  EtsyImage,
  EtsyPrice,
  EtsyProduct,
  ImageProps,
  ProductPayload,
  ProductProps,
  SiteSettings,
} from '../../types';
import { etsyConfig } from '../utils/config';
import { client } from '../utils/etsyClient';
import { slugify, textToHtml, toSentenceCase } from '../utils/helpers';
import { getSiteSettings } from './global';

const storeId = etsyConfig.storeId;

function processProductPath(slug: string): string {
  return `/shop/product/${slug}/`;
}

function calculatePrice(amount: number, divisor: number): string {
  return (amount / divisor).toFixed(2);
}

function processDisplayPrice(price: EtsyPrice): string {
  const currencySymbol = price.currency_code === 'GBP' ? '£' : 'NA';
  const amount = calculatePrice(price.amount, price.divisor);
  return `${currencySymbol}${amount}`;
}

function processImage(image: EtsyImage, alt: string): ImageProps {
  return {
    src: image.url_570xN,
    width: image.full_width,
    height: image.full_height,
    alt,
    backgroundColor: image.hex_code && `#${image.hex_code}`,
  };
}

function proccessProduct(
  product: EtsyProduct,
  siteSettings: SiteSettings,
): ProductProps {
  const {
    state,
    listing_id,
    title,
    price,
    currency_code,
    url,
    description,
    images,
  } = product;
  const cleanTitle = decode(toSentenceCase(title.split(' - ')[0] || title), {
    level: 'html5',
  });
  const slug = slugify(cleanTitle);
  const trimmedDescription = toSentenceCase(
    description.split('About me:')[0] || description,
  );
  const descriptionParts = trimmedDescription.replace(/\r/g, '').split(/\n/);

  return {
    title: cleanTitle,
    price: processDisplayPrice(price),
    description: textToHtml(trimmedDescription),
    currencyCode: currency_code,
    path: processProductPath(slug),
    slug,
    url,
    listingId: listing_id,
    state,
    image: processImage(images[0], cleanTitle),
    meta: {
      title: `${cleanTitle} | Shop | ${siteSettings.title}`,
      description: descriptionParts[1] || title,
      og: {
        image: images[0].url_570xN,
      },
      jsonLd: {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: cleanTitle,
        image: images[0].url_570xN,
        description: trimmedDescription,
        brand: {
          '@type': 'Brand',
          name: 'Sally Payne',
        },
        offers: {
          '@type': 'AggregateOffer',
          price: calculatePrice(price.amount, price.divisor),
          lowPrice: calculatePrice(price.amount, price.divisor),
          priceCurrency: price.currency_code,
        },
      },
    },
  };
}

async function getCachedProducts(): Promise<
  { results: ProductPayload[] } | false
> {
  try {
    return require('../../tmp/products.json');
  } catch {
    return false;
  }
}

async function fetchProducts(): Promise<ProductPayload[]> {
  const siteSettings = await getSiteSettings();
  console.log(`Fetching active products...`);
  const activeProducts = await client.fetch(
    `/shops/${storeId}/listings/active?limit=100`,
  );
  console.log('Fetched active products:', activeProducts?.results.length);
  if (!activeProducts) {
    return [];
  }
  const ids = activeProducts.results
    .map((item: { listing_id: number }) => item.listing_id)
    .join(',');
  console.log(`Fetching products...`);
  const productsData = await client.fetch(
    `/listings/batch?listing_ids=${ids}&includes=Images`,
  );

  return productsData.results.map((product: EtsyProduct) => {
    const processedProduct = proccessProduct(product, siteSettings);
    return {
      params: {
        id: processedProduct.slug,
      },
      props: processedProduct,
    };
  });
}

export async function getProducts(
  forceFetch = false,
): Promise<ProductPayload[]> {
  let products = null;
  const cachedProducts = await getCachedProducts();
  if (cachedProducts && !forceFetch) {
    products = cachedProducts.results;
  } else {
    products = await fetchProducts();
  }
  console.log('Fetched products:', products.length);
  return products;
}

export async function getPaginatedProducts(
  paginate: PaginateFunction,
): Promise<ReturnType<PaginateFunction>> {
  const proccessedProducts = await getProducts();
  const pageSize = 20;
  return paginate(proccessedProducts, {
    pageSize,
  });
}
