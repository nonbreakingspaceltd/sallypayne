import { client, config } from '../utils/sanityClient';
import { format } from 'date-fns';
import sanityImageUrlBuilder from '@sanity/image-url';

import { getSiteSettings } from './global';
import { processAllofType } from './utils/process';

const imageUrlBuilder = sanityImageUrlBuilder(config);

const processImage = (props) => {
  const { asset } = props;
  const src = imageUrlBuilder.image(asset).auto('format').quality(60);
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
  const defaultSize = sizes[0];

  // console.log(asset.metadata);

  return {
    _type: 'picture',
    alt: '',
    src: src.url(),
    width: asset.metadata.dimensions.width,
    height: asset.metadata.dimensions.height,
    lqip: asset.metadata.lqip,
    backgroundColor: asset.metadata.palette?.dominant?.background,
    sources: sizes.map(({ media, width }) => {
      const imageBase = src.width(width);
      return {
        src: imageBase.url(),
        srcset: [
          `${imageBase.url()} 1x`,
          `${imageBase.dpr(1.5).url()} 1.5x`,
          `${imageBase.dpr(2).url()} 2x`,
          `${imageBase.dpr(3).url()} 3x`,
        ],
        media,
      };
    }),
  };
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
  return posts.map((post) => ({
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
  }));
}
