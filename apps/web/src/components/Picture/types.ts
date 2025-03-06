export interface PictureProps {
  src: string;
  alt?: string;
  backgroundColor?: string;
  caption?: string;
  lqip?: string;
  loading?: 'eager' | 'lazy';
  sources?: {
    src: string;
    srcset?: string[];
    type?: string;
    media?: string;
  }[];
  width?: number;
  height?: number;
  variants?: string[];
}
