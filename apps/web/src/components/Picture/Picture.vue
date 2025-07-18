

<script lang="ts" setup>
import classNames from 'classnames';
import { computed } from 'vue';
import type { PictureProps } from './types';

const props = defineProps<PictureProps>();

const classes = computed(() => {
  return classNames(
    'sp-c-picture',
    props.variants?.map((variant) => `sp-c-picture--${variant}`),
  );
});
</script>

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
          :srcset="source.srcset?.join(', ') ?? undefined"
          :type="source.type ?? undefined"
          :media="source.media ?? undefined"
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
