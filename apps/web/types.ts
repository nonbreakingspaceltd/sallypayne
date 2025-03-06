import type { PortableTextComponentProps } from '@portabletext/vue';
import type { GetStaticPathsItem } from 'astro';
import type { PictureProps } from './src/components/Picture/types';

// TODO: Replace with actual types
export type TODO = any;

export type PortableTextProps = TODO;

export interface NavigationItem {
  label: string;
  href: string;
  current?: boolean;
}

export interface SiteSettings {
  title: string;
  description: string;
  ogImage: string;
}

export interface ImageResponse {
  _type?: string;
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  asset: {
    _ref: string;
  };
}

export interface VideoResponse {
  _type?: string;
  code: string;
}

export interface ImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  backgroundColor?: string;
}

export type BodyProps = PortableTextComponentProps<PortableTextProps>;

export interface PageResponse {
  title: string;
  body: PortableTextComponentProps<PortableTextProps>;
  publishedDate: string;
  slug: string;
  excerpt?: string;
  media?: {
    main?: ImageResponse;
  };
  meta?: Partial<{
    metaTitle: string;
    metaDescription: string;
    og: {
      image: string;
      type: string;
      publishedDate: string;
    };
    blockIndexing: boolean;
  }>;
}

export interface PageProps {
  title: string;
  path: string;
  image?: PictureProps;
  body: BodyProps;
  excerpt?: string;
  publishedDate?: string;
  publishedDateShort?: string;
  meta: {
    title: string;
    description: string;
    blockIndexing?: boolean;
    og?: Partial<{
      image: string;
      type: string;
      publishedDate: string;
    }>;
    jsonLd?: Partial<{
      '@context': string;
      '@type': string;
      headline: string;
      image: string;
      description: string;
      url: string;
      author: {
        '@type': string;
        name: string;
      };
      datePublished: Date;
    }>;
  };
}

export type PagePayload = {
  params: GetStaticPathsItem['params'];
  props: PageProps;
};

export interface EtsyPrice {
  amount: number;
  divisor: number;
  currency_code: string;
}

export interface EtsyImage {
  url_570xN: string;
  full_width: number;
  full_height: number;
  hex_code?: string;
}

export interface EtsyProduct {
  state: string;
  listing_id: number;
  title: string;
  price: EtsyPrice;
  currency_code: string;
  url: string;
  description: string;
  images: EtsyImage[];
}

export interface ProductProps {
  title: string;
  price: string;
  description: string;
  currencyCode: string;
  path: string;
  slug: string;
  url: string;
  listingId: number;
  state: string;
  image: ImageProps;
  meta: {
    title: string;
    description: string;
    og: {
      image: string;
    };
    jsonLd: {
      '@context': string;
      '@type': string;
      name: string;
      image: string;
      description: string;
      brand: {
        '@type': string;
        name: string;
      };
      offers: {
        '@type': string;
        price: string;
        lowPrice: string;
        priceCurrency: string;
      };
    };
  };
}

export interface ProductPayload {
  params: {
    id: string;
  };
  props: ProductProps;
}
