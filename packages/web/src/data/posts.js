import { client } from '../utils/sanityClient';
import { format } from 'date-fns';
import { getSiteSettings } from './global';
import { processAllofType } from './utils/process';
import { processPicture } from './components/picture';

const postQuery = /* groq */ `
  *[_type == 'post'] {
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

const processImage = (imageProps) => {
  if (!imageProps) {
    return undefined;
  }

  const sizes = [
    {
      media: 'screen and (max-width: 767px)',
      width: 350,
      // height: 350,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 840,
      // height: 840,
    },
  ];

  return processPicture(imageProps, sizes);
};

const processPostBody = (body) => {
  let processedBody = body;
  processedBody = processAllofType('imageExtended', processedBody, processImage);

  return processedBody;
};

const processPostPath = (slug, year, month) => {
  return `/journal/${year}/${month}/${slug}/`;
};

const proccessPost = (post, siteSettings) => {
  const { title, slug, publishedDate, excerpt, body, meta, media } = post;
  const parsedPublishDate = new Date(publishedDate);
  const year = format(parsedPublishDate, 'yyyy');
  const month = format(parsedPublishDate, 'MM');
  return {
    title,
    path: processPostPath(slug, year, month),
    publishedDate: format(new Date(parsedPublishDate), 'eeee, MMMM do yyyy'), // dddd, MMMM Do YYYY
    excerpt,
    body: processPostBody(body),
    image: processImage(media?.main),
    meta: {
      title: `${meta.metaTitle || title} | Journal | ${siteSettings.title}`,
      description: meta.metaDescription,
    },
  };
};

export function postToCard(post) {
  const { title, path } = post;
  return {
    title,
    href: path,
  };
}

export async function getPaginatedPosts(paginate) {
  const siteSettings = await getSiteSettings();
  const posts = await client.fetch(postQuery);
  const proccessedPosts = posts.map((post) => proccessPost(post, siteSettings));
  const pageSize = 20;
  return paginate(proccessedPosts, {
    pageSize,
  });
}

export async function getPosts() {
  const siteSettings = await getSiteSettings();
  const posts = await client.fetch(postQuery);
  return posts.map((post) => {
    return {
      params: {
        year: format(new Date(post.publishedDate), 'yyyy'),
        month: format(new Date(post.publishedDate), 'MM'),
        slug: post.slug,
      },
      props: proccessPost(post, siteSettings),
    };
  });
}
