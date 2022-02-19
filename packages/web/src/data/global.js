import { client } from '../utils/sanityClient';

export async function getSiteSettings() {
  const settings = await client.fetch(/* groq */ `
    *[
      !(_id in path("drafts.**")) &&
      _type == 'settings'
    ][0] {
      title,
      description
    }
  `);
  return settings;
}

export function getNavigation(currentPath) {
  let routes = [
    {
      label: 'About',
      href: '/about',
      current: null
    },
    {
      label: 'Scrapbook',
      href: '/scrapbook',
      current: null
    },
    {
      label: 'Shop',
      href: '/shop',
      current: null
    },
    {
      label: 'Contact',
      href: '/contact',
      current: null
    },
  ];
  return routes.map((route) => {
    if (currentPath.includes(route.href)) {
      route.current = true
    }
    return route;
  });
}
