import { imageUrlBuilder } from '../../utils/sanityClient';

export const processPicture = (props, sizes) => {
  const { asset } = props;
  const src = imageUrlBuilder.image(asset).auto('format').quality(60);
  const defaultSize = sizes[0];
  const hasDimensions = defaultSize.width && defaultSize.height;

  return {
    _type: 'picture',
    alt: '',
    src: src.url(),
    width: hasDimensions ? defaultSize.width : asset.metadata.dimensions.width,
    height: hasDimensions ? defaultSize.height : asset.metadata.dimensions.height,
    // lqip: asset.metadata.lqip,
    backgroundColor: asset.metadata.palette?.dominant?.background,
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
        srcset: [
          `${imageBase.url()} 1x`,
          `${imageBase.dpr(1.5).url()} 2x`,
        ],
        media,
      };
    }),
  };
};
