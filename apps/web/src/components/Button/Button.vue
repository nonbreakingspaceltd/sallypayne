<script setup lang="ts">
import classNames from 'classnames';
import { computed } from 'vue';
import type { ButtonProps } from './types';

const props = withDefaults(defineProps<ButtonProps>(), {
  as: undefined,
  href: undefined,
  variants: () => [],
  type: undefined,
});

const _htmlTag = computed(() => props.as || (props.href ? 'a' : 'button'));

const _variantClasses = computed(() =>
  classNames(props.variants?.map((variant) => `sp-c-button--${variant}`)),
);
</script>

<template>
  <component
    :is="htmlTag"
    :type="href ? null : type"
    :class="['sp-c-button', variantClasses]"
    :href="href"
    :id="id"
  >
    <span class="sp-c-button__label" v-if="$slots.default">
      <slot name="default" />
    </span>
    <span class="sp-c-button__icon" v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </component>
</template>

<style src="./styles.css" />
