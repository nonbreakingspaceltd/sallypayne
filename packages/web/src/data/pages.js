import { client } from '../utils/sanityClient';
import { getSiteSettings } from './global';

export async function getPages() {
  const siteSettings = await getSiteSettings();
  const pages = await client.fetch(/* groq */ `
    *[_type == 'page'] {
      title,
      "slug": slug.current,
      meta
    }
  `);
  return pages.map((page) => ({
    params: {
      slug: page.slug,
    },
    props: {
      page,
      title: page.title,
      meta: {
        title: `${page.meta.metaTitle || page.title} | ${siteSettings.title}`,
        description: page.meta.metaDescription,
      },
    },
  }));
}
