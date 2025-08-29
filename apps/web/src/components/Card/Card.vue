<script setup lang="ts">
import classNames from 'classnames';
import { computed, ref } from 'vue';
import Picture from '../Picture/Picture.vue';
import type { CardProps } from './types';

const props = withDefaults(defineProps<CardProps>(), {
  href: undefined,
  image: undefined,
  subtitle: undefined,
  variants: undefined,
});

const classes = computed(() => {
  const baseClass = 'sp-c-card';
  return classNames(
    baseClass,
    props.variants?.map((variant) => `sp-c-card--${variant}`),
    {
      'sp-c-card--link': !!props.href,
    },
  );
});

const link = ref<HTMLAnchorElement>();

const handleClick = () => {
  if (props.href && link.value) {
    link.value.click();
  }
};
</script>

<template>
  <article :class="classes" @click="handleClick">
    <Picture class="sp-c-card__media" v-bind="image" v-if="image" />
    <div class="sp-c-card__content">
      <h2 class="sp-c-card__title">
        <a :href="href" class="sp-c-card__link" v-if="href" ref="link">
          {{ title }}
        </a>
        <template v-else>
          {{ title }}
        </template>
      </h2>
      <div class="sp-c-card__subtitle" v-if="subtitle">
        {{ subtitle }}
      </div>
      <div v-if="$slots.default" class="sp-c-card__body">
        <slot />
      </div>
    </div>
  </article>
</template>

<style src="./styles.css" />
