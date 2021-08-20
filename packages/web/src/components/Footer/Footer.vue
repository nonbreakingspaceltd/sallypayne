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
        class="sp-c-footer__social__link sp-c-footer__social__link--facebook"
      >
        <IconFacebook class="sp-c-footer__social__link__icon" />
      </a>
      <a
        href="https://twitter.com/salpdesign"
        class="sp-c-footer__social__link sp-c-footer__social__link--twitter"
      >
        <IconTwitter class="sp-c-footer__social__link__icon" />
      </a>
      <a
        href="https://www.instagram.com/sallypayne_design/"
        class="sp-c-footer__social__link sp-c-footer__social__link--instagram"
      >
        <IconInstagram class="sp-c-footer__social__link__icon" />
      </a>
      <a
        href="https://www.pinterest.co.uk/salhoulker/"
        class="sp-c-footer__social__link sp-c-footer__social__link--pinterest"
      >
        <IconPinterest class="sp-c-footer__social__link__icon" />
      </a>
    </aside>
  </footer>
</template>

<script>
import IconFacebook from './../../assets/icons/facebook.svg';
import IconTwitter from './../../assets/icons/twitter.svg';
import IconInstagram from './../../assets/icons/instagram.svg';
import IconPinterest from './../../assets/icons/pinterest.svg';

export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconInstagram,
    IconPinterest,
  },
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

    &__link {
      width: 32px;
      display: inline-block;

      & + & {
        margin-left: 10px;
      }

      &__icon {
        width: 100%;
        fill: var(--color-brand-abbey);
      }

      &--facebook:hover &__icon,
      &--facebook:focus &__icon {
        fill: var(--color-social-facebook);
      }

      &--twitter:hover &__icon,
      &--twitter:focus &__icon {
        fill: var(--color-social-twitter);
      }

      &--pinterest:hover &__icon,
      &--pinterest:focus &__icon {
        fill: var(--color-social-pinterest);
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
