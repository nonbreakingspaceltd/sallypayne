import type { TypedObject } from '@portabletext/types';
import { tryGetImageDimensions } from '@sanity/asset-utils';
import type { ImageResponse } from '../../../types';
import type { PictureProps } from '../../components/Picture/types';
import { imageUrlBuilder } from '../../utils/sanityClient';

export const processPicture = (
  props: ImageResponse,
  sizes: { media: string; width?: number; height?: number }[],
  alt?: string,
): (PictureProps & TypedObject) | undefined => {
  if (!props?.asset?._ref) {
    return undefined;
  }

  const dimensions = tryGetImageDimensions(props.asset._ref);

  const src = imageUrlBuilder
    .image(props.asset._ref)
    .auto('format')
    .quality(60);

  const defaultSize = sizes[0];
  const hasDimensions = defaultSize.width && defaultSize.height;

  return {
    _type: 'picture',
    alt: alt || '',
    src: src.url(),
    width: hasDimensions ? defaultSize.width : dimensions.width,
    height: hasDimensions ? defaultSize.height : dimensions.height,
    backgroundColor: undefined,
    sources: sizes.map(({ media, width, height }) => {
      let imageBase = src;
      if (width) {
        imageBase = imageBase.width(width);
      }
      if (height) {
        imageBase = imageBase.height(height);
      }
      return {
        src: imageBase.url(),
        srcset: [`${imageBase.url()} 1x`, `${imageBase.dpr(1.5).url()} 2x`],
        media,
      };
    }),
  };
};
