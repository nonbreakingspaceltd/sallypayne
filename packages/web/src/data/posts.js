import { client } from '../utils/sanityClient';
import { format } from 'date-fns';
import { getSiteSettings } from './global';
import { processAllofType } from './utils/process';
import { processPicture } from './components/picture';

const processImage = (props) => {
  const sizes = [
    {
      media: 'screen and (max-width: 767px)',
      width: 350,
      height: 350,
    },
    {
      media: 'screen and (min-width: 768px)',
      width: 840,
      height: 840
    },
  ];

  return processPicture(props, sizes);
};

const processBody = (body) => {
  let processedBody = body;
  processedBody = processAllofType('image', processedBody, processImage);

  return processedBody;
};

export async function getPosts() {
  const siteSettings = await getSiteSettings();
  const posts = await client.fetch(/* groq */ `
    *[_type == 'post'] {
      title,
      "slug": slug.current,
      publishedDate,
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
        _type == "image" => {
          ...,
          asset-> {
            ...
          }
        }
      },
      meta
    }
  `);
  return posts.map((post) => {
    const data = {
      params: {
        year: format(new Date(post.publishedDate), 'yyyy'),
        month: format(new Date(post.publishedDate), 'MM'),
        slug: post.slug,
      },
      props: {
        title: post.title,
        publishedDate: format(new Date(post.publishedDate), 'eeee, MMMM do yyyy'), // dddd, MMMM Do YYYY
        body: processBody(post.body),
        meta: {
          title: `${post.meta.metaTitle || post.title} | Journal | ${siteSettings.title}`,
          description: post.meta.metaDescription,
        },
      },
    }
    return data;
  });
}
