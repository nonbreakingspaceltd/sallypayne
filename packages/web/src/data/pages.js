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

  delete props._type;

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

const processPage = (page, siteSettings) => {
  return {
    title: page.title,
    body: processBody(page.body),
    image: processImage(page.media?.main),
    meta: {
      title: `${page.meta.metaTitle || page.title} | ${siteSettings.title}`,
      description: page.meta.metaDescription,
      blockIndexing: page.meta.blockIndexing
    },
  };
};

export async function getPages() {
  const siteSettings = await getSiteSettings();
  const response = await client.fetch(/* groq */ `
    *[_type == 'page'] {
      ${pageFields}
    }
  `);
  const pages = response.map((page) => ({
    params: {
      slug: page.slug,
    },
    props: processPage(page, siteSettings),
  }));
  console.log(pages.map(page => page.props.meta))
  return pages;
}

export async function getPage(slug) {
  const siteSettings = await getSiteSettings();
  const response = await client.fetch(/* groq */ `
    *[_type == 'page' && slug.current == '${slug}'][0] {
      ${pageFields}
    }
  `);
  const page = {
    params: {
      slug: response.slug,
    },
    props: processPage(response, siteSettings),
  };
  return page;
}
