import type { PictureProps } from '../Picture/types';

export interface CardProps {
  title: string;
  href?: string;
  image?: PictureProps;
  subtitle?: string;
  variants?: string[];
}
