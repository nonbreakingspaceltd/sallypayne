import { client, imageUrlBuilder } from '../utils/sanityClient';
import { format } from 'date-fns';
import { getSiteSettings } from './global';
import { processAllofType } from './utils/process';
import { processPicture } from './components/picture';

const postQuery = /* groq */ `
  *[_type == 'post'] | order(publishedDate desc) {
    title,
    "slug": slug.current,
    publishedDate,
    excerpt,
    media {
      main {
        ...,
        asset-> {
          ...
        }
      }
    },
    body[] {
      ...,
      _type == "imageExtended" => {
        ...,
        asset-> {
          ...
        }
      }
    },
    meta
  }
`;

function processImage(imageProps) {
  if (!imageProps) {
    return undefined;
  }

  const sizes = [
    {
      media: 'screen and (max-width: 767px)',
      width: 350,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 840,
    },
  ];

  return processPicture(imageProps, sizes);
}

function processYoutubeVideo(videoProps) {
  if (!videoProps) {
    return undefined;
  }
  return {
    _type: 'video',
    videoId: videoProps.code,
  };
}

function processPostBody(body) {
  let processedBody = body;
  processedBody = processAllofType('imageExtended', processedBody, processImage);
  processedBody = processAllofType('videoYoutube', processedBody, processYoutubeVideo);

  return processedBody;
}

function processPostPath(slug, year, month) {
  return `/scrapbook/${year}/${month}/${slug}/`;
}

function proccessPost(post, siteSettings, siteUrl) {
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
    image: processImage(media?.main),
    meta: {
      title: `${meta.metaTitle || title} | Scrapbook | ${siteSettings.title}`,
      description: meta.metaDescription,
      blockIndexing: meta.blockIndexing,
      og: {
        image: imageUrlBuilder.image(media?.main?.asset).width(1200).height(627).auto('format').url().toString(),
        type: 'article',
        publishedDate: publishedDate,
      },
      jsonLd: {
        '@context': 'https://schema.org/',
        '@type': 'BlogPosting',
        headline: title,
        image: imageUrlBuilder.image(media?.main?.asset).auto('format').url().toString(),
        description: excerpt,
        url: `${siteUrl}${path}`,
        author: {
          '@type': 'Person',
          name: 'Sally Payne'
        },
        datePublished: parsedPublishDate,
      },
    },
  };
}

export async function getPaginatedPosts(paginate, siteUrl) {
  const siteSettings = await getSiteSettings();
  const posts = await client.fetch(postQuery);
  const proccessedPosts = posts.map((post) => proccessPost(post, siteSettings, siteUrl));
  const pageSize = 20;
  return paginate(proccessedPosts, {
    pageSize,
  });
}

export async function getPosts(siteUrl) {
  const siteSettings = await getSiteSettings();
  const response = await client.fetch(postQuery);
  const posts = response.map((post) => {
    return {
      params: {
        year: format(new Date(post.publishedDate), 'yyyy'),
        month: format(new Date(post.publishedDate), 'MM'),
        slug: post.slug,
      },
      props: proccessPost(post, siteSettings, siteUrl),
    };
  });
  return posts;
}
