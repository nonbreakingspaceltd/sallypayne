import { config } from '../../utils/sanityClient';
import sanityImageUrlBuilder from '@sanity/image-url';

const imageUrlBuilder = sanityImageUrlBuilder(config);

export const processPicture = (props, sizes) => {
  const { asset } = props;
  const src = imageUrlBuilder.image(asset).auto('format').quality(100);

  return {
    _type: 'picture',
    alt: '',
    src: src.url(),
    width: asset.metadata.dimensions.width,
    height: asset.metadata.dimensions.height,
    lqip: asset.metadata.lqip,
    backgroundColor: asset.metadata.palette?.dominant?.background,
    sources: sizes.map(({ media, width }) => {
      const imageBase = src.width(width);
      return {
        src: imageBase.url(),
        srcset: [
          `${imageBase.url()} 1x`,
          `${imageBase.dpr(1.5).url()} 1.5x`,
          `${imageBase.dpr(2).url()} 2x`,
          `${imageBase.dpr(3).url()} 3x`,
        ],
        media,
      };
    }),
  };
};
