<template>
  <component :is="caption ? 'figure' : 'div'" :class="classes">
    <picture
      :style="{
        'background-image': lqip && `url(${lqip})`,
        'background-color': backgroundColor,
        'padding-top': aspectRatio,
      }"
      class="c-picture__picture"
    >
      <template v-if="sources">
        <source
          v-for="(source, index) in sources"
          :key="index"
          :srcset="source.srcset.join(',')"
          :type="source.type"
          :media="source.media"
        />
      </template>
      <img
        :src="src"
        :alt="alt"
        :width="size.width"
        :height="size.height"
        class="c-picture__image"
        :loading="loading"
      />
    </picture>
    <figcaption v-if="caption" class="c-picture__caption">{{ caption }}</figcaption>
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
      validator: (value) => {
        return (value && ['lazy', 'eager'].includes(value)) || value === null;
      },
    },
    maintainAspectRatio: {
      type: Boolean,
      default: false,
    },
    variants: {
      type: Array,
    },
    sources: {
      type: Array,
    },
    size: {
      type: Object,
      default: () => ({
        width: null,
        height: null,
      }),
    },
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes: ({ variants, size, maintainAspectRatio }) => {
      return classNames(
        'sp-c-picture',
        variants && variants.map((variant) => `sp-c-picture--${variant}`),
        size?.width && size?.height && maintainAspectRatio && `sp-c-picture--maintain-ratio`
      );
    },
    aspectRatio: ({ size, maintainAspectRatio }) => {
      return maintainAspectRatio && size?.width && size?.height
        ? `${(size.height / size.width) * 100}%`
        : null;
    }
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.c-picture {
  display: block;

  &__picture {
    display: block;
    margin: 0;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 1;
    position: relative;
  }

  &__image {
    display: block;
    height: auto;
    width: 100%;
  }

  &--maintain-ratio &__image {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__caption {
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
}
</style>
