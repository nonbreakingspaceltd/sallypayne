<template>
  <component
    :is="htmlTag"
    :type="href ? null : type"
    :class="['sp-c-button', variantClasses]"
    :href="href"
  >
    <span class="sp-c-button__label" v-if="$slots.default">
      <slot name="default" />
    </span>
    <span class="sp-c-button__icon" v-if="$slots.icon">
      <slot name="icon" />
    </span>
  </component>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    as: {
      type: String,
    },
    href: {
      type: String,
    },
    variants: {
      type: Array,
    },
    type: {
      type: String,
    },
  },
  computed: {
    htmlTag({ as, href }) {
      return as || (href ? 'a' : 'button');
    },
    variantClasses({ variants }) {
      return classNames(variants && variants.map((variant) => `sp-c-button--${variant}`));
    },
  },
};
</script>

<style lang="postcss" src="./Button.css"></style>
