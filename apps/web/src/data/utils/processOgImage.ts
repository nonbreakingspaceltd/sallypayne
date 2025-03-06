import type { ImageResponse } from '../../../types';
import { imageUrlBuilder } from '../../utils/sanityClient';

export function processOgImage(image: ImageResponse | undefined) {
  if (!image) {
    return undefined;
  }

  return imageUrlBuilder
    .image(image.asset._ref)
    .width(1200)
    .height(627)
    .auto('format')
    .url()
    .toString();
}
