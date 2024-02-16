<template>
  <component :is="caption ? 'figure' : 'div'" :class="classes">
    <picture
      :style="{
        'background-image': lqip && `url(${lqip})`,
        'background-color': backgroundColor,
      }"
      class="sp-c-picture__picture"
    >
      <template v-if="sources">
        <source
          v-for="(source, index) in sources"
          :key="index"
          :srcset="source.srcset.join(', ')"
          :type="source.type"
          :media="source.media"
        />
      </template>
      <img
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        class="sp-c-picture__image"
        :loading="loading"
      />
    </picture>
    <figcaption v-if="caption" class="sp-c-picture__caption">{{ caption }}</figcaption>
  </component>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    alt: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
    },
    caption: {
      type: String,
    },
    lqip: {
      type: String,
    },
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => {
        return (value && ['lazy', 'eager'].includes(value)) || value === null;
      },
    },
    variants: {
      type: Array,
    },
    sources: {
      type: Array,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes: ({ variants }) => {
      const baseClass = 'sp-c-picture';
      return classNames(
        baseClass,
        variants && variants.map((variant) => `${baseClass}--${variant}`)
      );
    },
  },
};
</script>

<style lang="pcss">
@import '../../assets/styles/tools';

.sp-c-picture {
  display: block;
}

.sp-c-picture__picture {
  display: block;
  margin: 0;
  background-size: cover;
  background-position: 50% 50%;
  z-index: 1;
  position: relative;
}
.sp-c-picture__image {
  display: block;
  height: auto;
  width: 100%;
  aspect-ratio: attr(width) / attr(height);
}

.sp-c-picture--cover .sp-c-picture__image,
.sp-c-picture--cover .sp-c-picture__picture {
  object-fit: cover;
}

.sp-c-picture__caption {
  display: block;
  z-index: 2;
  bottom: 0;
  right: 0;
  color: var(--color-mid-grey);
  padding: var(--space-y-1) 0 0;
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  font-style: italic;
}
</style>
