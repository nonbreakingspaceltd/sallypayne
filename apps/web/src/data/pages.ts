import type { TypedObject } from '@portabletext/types';
import type {
  BodyProps,
  ImageResponse,
  PagePayload,
  PageProps,
  PageResponse,
  SiteSettings,
} from '../../types';
import type { PictureProps } from '../components/Picture/types';
import { client } from '../utils/sanityClient';
import { processPicture } from './components/picture';
import { getSiteSettings } from './global';
import { processAllofType } from './utils/process';
import { processOgImage } from './utils/processOgImage';

const pageFields = /* groq */ `
  title,
  "slug": slug.current,
  meta,
  body[],
  media {
    main
  }
`;

function processImage(
  props: ImageResponse | undefined,
): (PictureProps & TypedObject) | undefined {
  if (!props || !props.asset?._ref) {
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

function processBody(body: PageResponse['body']): BodyProps {
  let processedBody = body;
  processedBody = processAllofType('image', processedBody, processImage);

  return processedBody;
}

function processPage(
  page: PageResponse,
  siteSettings: SiteSettings,
): PageProps {
  const image = processImage(page.media?.main);
  const ogImage = processOgImage(page.media?.main);

  return {
    title: page.title,
    path: page.slug,
    body: processBody(page.body),
    image,
    meta: {
      title: `${page.meta?.metaTitle || page.title} | ${siteSettings.title}`,
      description: page.meta?.metaDescription || '',
      blockIndexing: !page.meta?.blockIndexing,
      og: {
        image: ogImage,
      },
    },
  };
}

export async function getPages(exclude: string[] = []): Promise<PagePayload[]> {
  console.log('Fetching pages...');
  const siteSettings = await getSiteSettings();
  const response = await client.fetch<PageResponse[]>(/* groq */ `
    *[_type == 'page'] {
      ${pageFields}
    }
  `);
  const pages = response.reduce<PagePayload[]>(
    (filtered: PagePayload[], page: PageResponse) => {
      if (!exclude.includes(page.slug)) {
        filtered.push({
          params: {
            slug: page.slug,
          },
          props: processPage(page, siteSettings),
        });
      }
      return filtered;
    },
    [],
  );
  console.log('Fetched pages:', pages.length);
  return pages;
}

export async function getPage(slug: string): Promise<PagePayload> {
  const siteSettings = await getSiteSettings();
  const response = await client.fetch<PageResponse>(/* groq */ `
    *[_type == 'page' && slug.current == '${slug}'][0] {
      ${pageFields}
    }
  `);
  const page: PagePayload = {
    params: {
      slug: response.slug,
    },
    props: processPage(response, siteSettings),
  };
  return page;
}
