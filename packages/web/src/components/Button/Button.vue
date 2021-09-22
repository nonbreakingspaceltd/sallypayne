<template>
  <component
    :is="htmlTag"
    :type="href ? null : type"
    :class="['c-button', variantClasses]"
    :href="href"
  >
    <span class="c-button__label" v-if="$slots.default">
      <slot name="default" />
    </span>
    <span class="c-button__icon" v-if="$slots.icon">
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
      return as || (href && 'a') || 'button';
    },
    variantClasses({ variants }) {
      return classNames(variants && variants.map((variant) => `c-button--${variant}`));
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.c-button {
  @mixin button-reset;
  @mixin font-smoothing;

  /* Layout */
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: start;
  vertical-align: middle;

  /* Visual */
  background-color: var(--color-white);
  color: var(--color-black);
  border-radius: 0;

  /* Size */
  padding: var(--space-y-3) var(--space-x-5);

  /* Text */
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: 700;
  text-align: center;
  line-height: calc(var(--baseline) * 6);
  white-space: nowrap;

  @media (--mq-lg) {
    line-height: calc(var(--baseline) * 7);
  }

  &:hover,
  &:active {
  }

  &:focus {
  }

  &--link {
    background: none;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  &--ghost {
    background: none;
  }

  &--invert {
    background-color: var(--color-black);
    color: var(--color-white);
  }

  &--color-a {
    background-color: var(--color-brand-peppermint-green);
    color: var(--color-black);
  }

  &--color-b {
    background-color: var(--color-brand-yellow);
    color: var(--color-black);
  }

  &--color-c {
    background-color: var(--color-brand-pink);
    color: var(--color-black);
  }

  &--color-d {
    background-color: var(--color-brand-dark-blue);
    color: var(--color-white);
  }

  &--color-e {
    background-color: var(--color-brand-light-pink);
    color: var(--color-black);
  }

  &--color-f {
    background-color: var(--color-brand-light-green);
    color: var(--color-black);
  }

  &--color-g {
    background-color: var(--color-brand-light-blue);
    color: var(--color-black);
  }

  &--color-h {
    background-color: var(--color-brand-blush);
    color: var(--color-black);
  }

  &--block {
    width: 100%;
  }

  &.disabled,
  &[disabled] {
    cursor: default;
    opacity: 0.3;
  }

  &--block {
    width: 100%;
    display: block;
    padding-left: 0;
    padding-right: 0;
  }

  &--color-a {
    background-color: var(--color-brand-danube);
    border-color: var(--color-brand-danube);
    color: var(--color-white);
  }

  &--etsy {
    background-color: var(--color-social-etsy);
    border-color: var(--color-social-etsy);
    color: var(--color-white);
  }
}

.c-button__label {
  display: inline-block;
  vertical-align: middle;
}

.c-button__icon {
  display: inline-block;
  vertical-align: middle;

  .c-button--etsy & {
    fill: var(--color-white);
    width: 50px;
    vertical-align: -10px;
    margin-left: 10px;
  }
}
</style>
