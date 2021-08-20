import { client } from '../utils/sanityClient';

export async function getPages() {
  const pages = await client.fetch(/* groq */ `
    *[_type == 'page'] {
      title,
      "slug": slug.current
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
        title: page.title,
        description: page.title,
      },
    },
  }));
}
