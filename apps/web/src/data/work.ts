import type { TypedObject } from '@portabletext/types';
import { tryGetImageDimensions } from '@sanity/asset-utils';
import type {
  BodyProps,
  ImageResponse,
  ListingPage,
  SiteSettings,
  WorkProps,
  WorkResponse,
} from '../../types';
import type { CarouselSlideProps } from '../components/Carousel/types';
import type { PictureProps } from '../components/Picture/types';
import { client, imageUrlBuilder } from '../utils/sanityClient';
import { processPicture } from './components/picture';
import { getSiteSettings } from './global';
import { fixPathSlashes } from './utils/fixPathSlashes.ts';
import { processAllofType } from './utils/process';
import { processOgImage } from './utils/processOgImage';

const workFields = /* groq */ `
  title,
  "slug": slug.current,
  publishedDate,
  logo,
  excerpt,
  body[],
  gallery[] {
    _key,
    title,
    caption,
    image
  },
  galleryBackground,
  meta
`;

const workListQuery = /* groq */ `
  *[
    !(_id in path("drafts.**")) &&
    _type == 'work'
  ] | order(publishedDate desc) {
    ${workFields}
  }
`;

const galleryBackgroundColors: Record<string, string> = {
  sinbad: 'var(--color-brand-sinbad)',
  manhattan: 'var(--color-brand-manhattan)',
  reddamask: 'var(--color-brand-reddamask)',
  acapulco: 'var(--color-brand-acapulco)',
  cucumber: 'var(--color-brand-cucumber)',
  goldensand: 'var(--color-brand-goldensand)',
  anzac: 'var(--color-brand-anzac)',
  danube: 'var(--color-brand-danube)',
};

function processFeatureImage(
  props: ImageResponse | undefined,
  alt?: string,
): (PictureProps & TypedObject) | undefined {
  if (!props?.asset?._ref) {
    return undefined;
  }

  props._type = undefined;

  const sizes = [
    {
      media: 'screen and (max-width: 767px)',
      width: 700,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 800,
    },
  ];

  return processPicture(props, sizes, alt);
}

function processBodyImage(
  props: ImageResponse | undefined,
): (PictureProps & TypedObject) | undefined {
  if (!props?.asset?._ref) {
    return undefined;
  }

  props._type = undefined;

  const sizes = [
    {
      media: 'screen and (max-width: 767px)',
      width: 350,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 704,
    },
  ];

  return processPicture(props, sizes);
}

function processSlideImage(
  props: ImageResponse | undefined,
  alt?: string,
): (PictureProps & TypedObject) | undefined {
  if (!props?.asset?._ref) {
    return undefined;
  }

  props._type = undefined;

  const sizes = [
    {
      media: 'screen and (max-width: 767px)',
      width: 767,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 960,
    },
  ];

  return processPicture(props, sizes, alt);
}

function processBody(body: WorkResponse['body']): BodyProps {
  let processedBody = body;
  processedBody = processAllofType(
    'imageExtended',
    processedBody,
    processBodyImage,
  );

  return processedBody;
}

function processSlides(
  gallery: WorkResponse['gallery'] = [],
): CarouselSlideProps[] {
  return gallery.reduce<CarouselSlideProps[]>((slides, slide) => {
    const image = processSlideImage(slide.image, slide.title);
    if (image) {
      slides.push({
        key: slide._key,
        image,
        title: slide.title,
        caption: slide.caption,
      });
    }
    return slides;
  }, []);
}

function processWorkLogo(
  props: ImageResponse | undefined,
  title: string,
): PictureProps | undefined {
  const ref = props?.asset?._ref;
  if (!ref) {
    return undefined;
  }

  const dimensions = tryGetImageDimensions(ref);
  const height = 64;
  const width = dimensions
    ? Math.round((dimensions.width / dimensions.height) * height)
    : undefined;

  return {
    src: imageUrlBuilder
      .image(ref)
      .height(height * 2)
      .auto('format')
      .quality(80)
      .url(),
    alt: `${title} logo`,
    width,
    height,
  };
}

function processWork(
  work: WorkResponse,
  siteSettings: SiteSettings,
  isCard = false,
): WorkProps {
  const { title, slug, logo, excerpt, body, gallery, galleryBackground, meta } =
    work;
  const path = fixPathSlashes(`/work/${slug}/`);
  const mainImage = gallery?.[0]?.image;

  return {
    title,
    path,
    logo: isCard ? undefined : processWorkLogo(logo, title),
    excerpt,
    image: isCard
      ? processFeatureImage(mainImage, gallery?.[0]?.title)
      : undefined,
    body: processBody(body),
    slides: isCard ? [] : processSlides(gallery),
    galleryBackground: galleryBackground
      ? galleryBackgroundColors[galleryBackground]
      : undefined,
    meta: {
      title: `${meta?.metaTitle || title} | Work | ${siteSettings.title}`,
      description: meta?.metaDescription || excerpt || '',
      blockIndexing: meta?.blockIndexing,
      og: {
        image: mainImage && processOgImage(mainImage),
      },
    },
  };
}

export async function getWork(slug: string): Promise<WorkProps | undefined> {
  const siteSettings = await getSiteSettings();
  const response = await client.fetch<WorkResponse | null>(
    /* groq */ `
    *[
      !(_id in path("drafts.**")) &&
      _type == 'work' &&
      slug.current == $slug
    ][0] {
      ${workFields}
    }
  `,
    { slug },
  );
  if (!response) {
    return undefined;
  }
  return processWork(response, siteSettings);
}

export async function getWorkPage(
  pageNumber: number,
  pageSize = 10,
): Promise<ListingPage<WorkProps> | undefined> {
  const siteSettings = await getSiteSettings();
  const works = await client.fetch<WorkResponse[]>(workListQuery);
  const lastPage = Math.max(1, Math.ceil(works.length / pageSize));
  if (pageNumber < 1 || pageNumber > lastPage) {
    return undefined;
  }
  const start = (pageNumber - 1) * pageSize;
  return {
    data: works
      .slice(start, start + pageSize)
      .map((work) => processWork(work, siteSettings, true)),
    currentPage: pageNumber,
    lastPage,
  };
}
