import type { CardProps } from '../Card/types';

export interface CardMasonryItem extends CardProps {
  excerpt?: string;
  variant: string;
}

export interface CardMasonryProps {
  items: CardMasonryItem[];
}
