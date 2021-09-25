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
  padding: calc(var(--baseline) * 4);
  font-size: 0;
  overflow: hidden;

  @media (--mq-m) {
    padding: calc(var(--baseline) * 8);
  }

  @media (--mq-l) {
    display: flex;
  }
}

.sp-c-footer__item {
  font-size: 14px;
  line-height: 18px;
  display: block;

  @media (--mq-l) {
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
  }

  & + & {
    margin-top: 8px;

    @media (--mq-l) {
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

.sp-c-footer__social {
  margin-top: 16px;

  @media (--mq-l) {
    margin: -4px 0 0 auto;
  }
}

.sp-c-footer__social__link {
  width: 32px;
  display: inline-block;
  color: var(--color-brand-abbey);

  & + & {
    margin-left: 10px;
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
