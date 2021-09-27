<template>
  <footer class="sp-c-footer">
    <span class="sp-c-footer__item">
      <small> All Content &copy; Copyright Sally Payne Design </small>
    </span>
    <span class="sp-c-footer__item">
      <a href="mailto:sallypaynedesign@gmail.com"> sallypaynedesign@gmail.com </a>
    </span>
    <aside class="sp-c-footer__social">
      <h2 class="sp-c-footer__social sp-u-sr-only">
        Social accounts
      </h2>
      <a
        href="https://www.facebook.com/sallypaynedesign/"
        class="sp-c-footer__social__link sp-c-footer__social__link--facebook"
      >
        <IconFacebook class="sp-c-footer__social__icon" />
        <span class="sp-u-sr-only">
          Facebook
        </span>
      </a>
      <a
        href="https://twitter.com/salpdesign"
        class="sp-c-footer__social__link sp-c-footer__social__link--twitter"
      >
        <IconTwitter class="sp-c-footer__social__icon" />
        <span class="sp-u-sr-only">
          Twitter
        </span>
      </a>
      <a
        href="https://www.instagram.com/sallypayne_design/"
        class="sp-c-footer__social__link sp-c-footer__social__link--instagram"
      >
        <IconInstagram class="sp-c-footer__social__icon" />
        <span class="sp-u-sr-only">
          Instagram
        </span>
      </a>
      <a
        href="https://www.pinterest.co.uk/salhoulker/"
        class="sp-c-footer__social__link sp-c-footer__social__link--pinterest"
      >
        <IconPinterest class="sp-c-footer__social__icon" />
        <span class="sp-u-sr-only">
          Pinterest
        </span>
      </a>
    </aside>
  </footer>
</template>

<script>
import IconFacebook from '../../assets/icons/facebook.svg';
import IconTwitter from '../../assets/icons/twitter.svg';
import IconInstagram from '../../assets/icons/instagram.svg';
import IconPinterest from '../../assets/icons/pinterest.svg';

export default {
  components: {
    IconFacebook,
    IconTwitter,
    IconInstagram,
    IconPinterest,
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-footer {
  padding: var(--space-y-4) var(--space-x-4);
  font-size: 0;
  overflow: hidden;

  @media (--mq-md) {
    padding: var(--space-y-8) var(--space-x-8);
  }

  @media (--mq-lg) {
    display: flex;
  }
}

.sp-c-footer__item {
  font-size: 14px;
  line-height: var(--space-y-5);
  display: block;

  @media (--mq-lg) {
    display: inline-block;
    font-size: 16px;
    line-height: var(--space-y-7);
  }

  & + & {
    margin-top: var(--space-y-2);

    @media (--mq-lg) {
      padding-left: var(--space-x-3);
      margin-top: 0;
      margin-left: var(--space-x-3);
      border-left: 1px solid #ddd;
    }
  }

  small {
    font-size: inherit;
    line-height: inherit;
  }
}

.sp-c-footer__social {
  margin-top: var(--space-y-4);

  @media (--mq-lg) {
    margin: calc(var(--space-y-1) * -1) 0 0 auto;
  }
}

.sp-c-footer__social__link {
  width: var(--space-x-7);
  display: inline-block;
  color: var(--color-brand-abbey);

  & + & {
    margin-left: var(--space-x-2);
  }

  &--facebook {

    &:hover,
    &:focus {
      color: var(--color-social-facebook);
    }
  }

  &--twitter {

    &:hover,
    &:focus {
      color: var(--color-social-twitter);
    }
  }

  &--pinterest {

    &:hover,
    &:focus {
      color: var(--color-social-pinterest);
    }
  }

  &--instagram {

    &:hover,
    &:focus {
      color: var(--color-social-instagram);
    }
  }
}

.sp-c-footer__social__icon {
  width: 100%;
  fill: currentColor;
}
</style>
