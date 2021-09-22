import { client } from '../utils/sanityClient';
import { getSiteSettings } from './global';
import { processAllofType } from './utils/process';
import { processPicture } from './components/picture';

const pageFields = /* groq */ `
  title,
  "slug": slug.current,
  meta,
  body[] {
    ...,
    _type == "image" => {
      ...,
      asset-> {
        ...
      }
    }
  },
  media {
    main {
      ...,
      asset-> {
        ...
      }
    }
  }
`;

const processImage = (props) => {
  if (!props) {
    return undefined;
  }

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
};

const processBody = (body) => {
  let processedBody = body;
  processedBody = processAllofType('image', processedBody, processImage);

  return processedBody;
};

export async function getPages() {
  const siteSettings = await getSiteSettings();
  const pages = await client.fetch(/* groq */ `
    *[_type == 'page'] {
      ${pageFields}
    }
  `);
  return pages.map((page) => ({
    params: {
      slug: page.slug,
    },
    props: {
      title: page.title,
      body: processBody(page.body),
      image: processImage(page.media?.main),
      meta: {
        title: `${page.meta.metaTitle || page.title} | ${siteSettings.title}`,
        description: page.meta.metaDescription,
      },
    },
  }));
}

export async function getPage(slug) {
  const siteSettings = await getSiteSettings();
  const page = await client.fetch(/* groq */ `
    *[_type == 'page' && slug.current == '${slug}'][0] {
      ${pageFields}
    }
  `);
  const data = {
    params: {
      slug: page.slug,
    },
    props: {
      title: page.title,
      body: processBody(page.body),
      image: processImage(page.media?.main),
      meta: {
        title: `${page.meta.metaTitle || page.title} | ${siteSettings.title}`,
        description: page.meta.metaDescription,
      },
    },
  };
  return data;
}
