import type { GetStaticPathsResult, PaginateFunction } from 'astro';
import { format } from 'date-fns';
import type {
  BodyProps,
  ImageResponse,
  PagePayload,
  PageProps,
  PageResponse,
  SiteSettings,
  VideoResponse,
} from '../../types';
import { client } from '../utils/sanityClient';
import { processPicture } from './components/picture';
import { getSiteSettings } from './global';
import { fixPathSlashes } from './utils/fixPathSlashes.ts';
import { processAllofType } from './utils/process';
import { processOgImage } from './utils/processOgImage';

const postQuery = /* groq */ `
  *[!
    (_id in path("drafts.**")) &&
    _type == 'post'
  ] | order(publishedDate desc) {
    title,
    "slug": slug.current,
    publishedDate,
    excerpt,
    media {
      main
    },
    body[],
    meta
  }
`;

function processImage(imageProps: ImageResponse, isCard = false) {
  if (!imageProps) {
    return undefined;
  }

  const cardSizes = [
    {
      media: 'screen and (max-width: 599px)',
      width: 160,
    },
    {
      media: 'screen and (max-width: 767px)',
      width: 250,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 350,
    },
  ];

  const sizes = [
    {
      media: 'screen and (max-width: 599px)',
      width: 350,
    },
    {
      media: 'screen and (max-width: 767px)',
      width: 500,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 700,
    },
  ];

  return processPicture(imageProps, isCard ? cardSizes : sizes);
}

function processYoutubeVideo(videoProps: VideoResponse) {
  if (!videoProps) {
    return undefined;
  }
  return {
    _type: 'video',
    videoId: videoProps.code,
  };
}

function processPostBody(body: BodyProps) {
  let processedBody = body;
  processedBody = processAllofType(
    'imageExtended',
    processedBody,
    processImage,
  );
  processedBody = processAllofType(
    'videoYoutube',
    processedBody,
    processYoutubeVideo,
  );

  return processedBody;
}

function processPostPath(slug: string, year: string, month: string) {
  return fixPathSlashes(`/scrapbook/${year}/${month}/${slug}/`);
}

function proccessPost(
  post: PageResponse,
  siteSettings: SiteSettings,
  siteUrl: string,
  isCard = false,
): PageProps {
  const { title, slug, publishedDate, excerpt, body, meta, media } = post;
  const parsedPublishDate = new Date(publishedDate);
  const year = format(parsedPublishDate, 'yyyy');
  const month = format(parsedPublishDate, 'MM');
  const path = processPostPath(slug, year, month);
  return {
    title,
    path,
    publishedDate: format(new Date(parsedPublishDate), 'eeee, MMMM do yyyy'),
    publishedDateShort: format(new Date(parsedPublishDate), 'MMMM do yyyy'),
    excerpt,
    body: processPostBody(body),
    image: processImage(media?.main, isCard),
    meta: {
      title: `${meta.metaTitle || title} | Scrapbook | ${siteSettings.title}`,
      description: meta.metaDescription,
      blockIndexing: meta.blockIndexing,
      og: {
        image: media?.main && processOgImage(media.main),
        type: 'article',
        publishedDate: publishedDate,
      },
      jsonLd: {
        '@context': 'https://schema.org/',
        '@type': 'BlogPosting',
        headline: title,
        image: media?.main && processOgImage(media.main),
        description: excerpt,
        url: fixPathSlashes(`${siteUrl}${path}`),
        author: {
          '@type': 'Person',
          name: 'Sally Payne',
        },
        datePublished: parsedPublishDate,
      },
    },
  };
}

export async function getPaginatedPosts(
  paginate: PaginateFunction,
  siteUrl: URL | undefined,
): Promise<GetStaticPathsResult> {
  if (!siteUrl) {
    throw new Error('Site URL is required');
  }
  const siteSettings = await getSiteSettings();
  const posts = await client.fetch<PageResponse[]>(postQuery);
  const proccessedPosts = posts.map((post) =>
    proccessPost(post, siteSettings, siteUrl.toString(), true),
  );
  const pageSize = 20;
  return paginate(proccessedPosts, { pageSize });
}

export async function getPosts(
  siteUrl: URL | undefined,
): Promise<PagePayload[]> {
  if (!siteUrl) {
    throw new Error('Site URL is required');
  }
  console.log('Fetching posts...');
  const siteSettings = await getSiteSettings();
  const response = await client.fetch<PageResponse[]>(postQuery);
  const posts = response.map((post) => {
    return {
      params: {
        year: format(new Date(post.publishedDate), 'yyyy'),
        month: format(new Date(post.publishedDate), 'MM'),
        slug: post.slug,
      },
      props: proccessPost(post, siteSettings, siteUrl.toString()),
    };
  });
  console.log('Fetched posts:', posts.length);
  return posts;
}
