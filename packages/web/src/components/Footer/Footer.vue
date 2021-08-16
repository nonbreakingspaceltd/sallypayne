<template>
  <footer class="sp-c-footer">
    <span class="sp-c-footer__item">
      <small> All Content &copy; Copyright {{ currentYear }} Sally Payne Illustration </small>
    </span>
    <span class="sp-c-footer__item">
      <a href="mailto:sallypaynedesign@gmail.com"> sallypaynedesign@gmail.com </a>
    </span>
    <aside class="sp-c-footer__social">
      <a
        href="https://www.facebook.com/sallypaynedesign/"
        class="sp-c-footer__social__item sp-c-footer__social__item--facebook"
      >
        <span class="sp-u-sronly">Facebook</span>
        <img
          svg-inline
          src="../../assets/icons/facebook.svg"
          class="sp-c-footer__social__item__svg"
          alt=""
        />
      </a>
      <a
        href="https://twitter.com/salpdesign"
        class="sp-c-footer__social__item sp-c-footer__social__item--twitter"
      >
        <span class="sp-u-sronly">Twitter</span>
        <img
          svg-inline
          src="../../assets/icons/twitter.svg"
          class="sp-c-footer__social__item__svg"
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/sallypayne_design/"
        class="sp-c-footer__social__item sp-c-footer__social__item--instagram"
      >
        <span class="sp-u-sronly">Instagram</span>
        <img
          svg-inline
          src="../../assets/icons/instagram.svg"
          class="sp-c-footer__social__item__svg"
          alt=""
        />
      </a>
      <a
        href="https://www.pinterest.co.uk/salhoulker/"
        class="sp-c-footer__social__item sp-c-footer__social__item--pinterest"
      >
        <span class="sp-u-sronly">Pinterest</span>
        <img
          svg-inline
          src="../../assets/icons/pinterest.svg"
          class="sp-c-footer__social__item__svg"
          alt=""
        />
      </a>
    </aside>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="postcss">
.sp-c-footer {
  padding: calc(var(--baseline) * 4);
  font-size: 0;
  overflow: hidden;

  @media (--mq-m) {
    padding: calc(var(--baseline) * 8);
  }

  &__item {
    font-size: 14px;
    line-height: 18px;
    display: block;

    @media (--mq-m) {
      display: inline-block;
    }

    @media (--mq-l) {
      font-size: 16px;
      line-height: 24px;
    }

    & + & {
      margin-top: 8px;

      @media (--mq-m) {
        padding-left: 10px;
        margin-top: 0;
        margin-left: 10px;
        border-left: 1px solid #ddd;
      }
    }

    small {
      font-size: inherit;
      line-height: inherit;
    }
  }

  &__social {
    margin-top: 16px;

    @media (--mq-l) {
      float: right;
      margin: -4px 0;
    }

    &__item {
      width: 32px;
      display: inline-block;

      & + & {
        margin-left: 10px;
      }

      &__svg {
        width: 100%;
        fill: var(--color-text);
      }

      &--facebook:hover &__svg,
      &--facebook:focus &__svg {
        fill: var(--color-social--facebook);
      }

      &--twitter:hover &__svg,
      &--twitter:focus &__svg {
        fill: var(--color-social--twitter);
      }

      &--pinterest:hover &__svg,
      &--pinterest:focus &__svg {
        fill: var(--color-social--pinterest);
      }

      &--instagram &__g2 {
        display: none;
      }

      &--instagram:hover &__g1,
      &--instagram:focus &__g1 {
        display: none;
      }

      &--instagram:hover &__g2,
      &--instagram:focus &__g2 {
        display: block;
      }
    }
  }
}
</style>
