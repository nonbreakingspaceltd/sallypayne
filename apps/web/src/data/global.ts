import type { NavigationItem, SiteSettings } from '../../types';
import { client } from '../utils/sanityClient';

export async function getSiteSettings(): Promise<SiteSettings> {
  const settings = await client.fetch<SiteSettings>(/* groq */ `
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

export function getNavigation(currentPath: string): NavigationItem[] {
  const routes = [
    {
      label: 'About',
      href: '/about',
      current: false,
    },
    {
      label: 'Scrapbook',
      href: '/scrapbook',
      current: false,
    },
    {
      label: 'Shop',
      href: '/shop',
      current: false,
    },
    {
      label: 'Contact',
      href: '/contact',
      current: false,
    },
  ];
  return routes.map((route: NavigationItem) => {
    if (currentPath?.includes(route.href)) {
      route.current = true;
    }
    return route;
  });
}
