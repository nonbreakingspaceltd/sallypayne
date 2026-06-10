import type { PictureProps } from '../Picture/types';

export interface CarouselSlideProps {
  key: string;
  image: PictureProps;
  title?: string;
  caption?: string;
}

export interface CarouselProps {
  label: string;
  slides: CarouselSlideProps[];
  backgroundColor?: string;
  class?: string;
  variants?: string[];
}
