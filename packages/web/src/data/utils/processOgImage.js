import { imageUrlBuilder } from '../../utils/sanityClient';

export function processOgImage(image) {
  return imageUrlBuilder.image(image).width(1200).height(627).auto('format').url().toString();
}
