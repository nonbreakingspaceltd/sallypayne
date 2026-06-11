import { decode } from 'html-entities';
import type {
  EtsyImage,
  EtsyPrice,
  EtsyProduct,
  ProductDocument,
} from '../../types';
import { etsyConfig } from '../utils/config';
import { client } from '../utils/etsyClient';
import { slugify, textToHtml, toSentenceCase } from '../utils/helpers';

const storeId = etsyConfig.storeId;

function calculatePrice(amount: number, divisor: number): string {
  return (amount / divisor).toFixed(2);
}

function processDisplayPrice(price: EtsyPrice): string {
  const currencySymbol = price.currency_code === 'GBP' ? '£' : 'NA';
  const amount = calculatePrice(price.amount, price.divisor);
  return `${currencySymbol}${amount}`;
}

function processImage(image: EtsyImage, alt: string) {
  return {
    src: image.url_570xN,
    width: image.full_width,
    height: image.full_height,
    alt,
    backgroundColor: image.hex_code ? `#${image.hex_code}` : undefined,
  };
}

function productToDocument(
  product: EtsyProduct,
  sortOrder: number,
): ProductDocument {
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
  const descriptionParts = trimmedDescription.replaceAll('\r', '').split(/\n/);

  return {
    _id: `product-${listing_id}`,
    _type: 'product',
    title: cleanTitle,
    slug,
    listingId: listing_id,
    state,
    url,
    price: processDisplayPrice(price),
    priceAmount: calculatePrice(price.amount, price.divisor),
    currencyCode: currency_code,
    description: textToHtml(trimmedDescription),
    metaDescription: descriptionParts[1] || cleanTitle,
    image: processImage(images[0], cleanTitle),
    sortOrder,
  };
}

/**
 * Fetch the shop's active listings from Etsy and shape them as Sanity
 * `product` documents. The studio's "Refresh Etsy products" tool calls this
 * via /api/etsy-products.json and writes the result to the dataset.
 */
export async function fetchEtsyProductDocuments(): Promise<ProductDocument[]> {
  const activeProducts = await client.fetch(
    `/shops/${storeId}/listings/active?limit=100`,
  );
  if (!activeProducts?.results?.length) {
    return [];
  }
  const ids = activeProducts.results
    .map((item: { listing_id: number }) => item.listing_id)
    .join(',');
  const productsData = await client.fetch(
    `/listings/batch?listing_ids=${ids}&includes=Images`,
  );

  return productsData.results.map((product: EtsyProduct, index: number) =>
    productToDocument(product, index),
  );
}
