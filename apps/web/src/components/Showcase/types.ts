import type { PictureProps } from '../Picture/types';

export interface ShowcaseItemProps {
  key: string;
  title: string;
  href: string;
  excerpt?: string;
  image?: PictureProps;
  backgroundColor?: string;
}

export interface ShowcaseProps {
  items: ShowcaseItemProps[];
  class?: string;
}
