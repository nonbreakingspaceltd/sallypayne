<script setup lang="ts">
import IconFacebook from '../../assets/icons/facebook.svg?component';
import IconInstagram from '../../assets/icons/instagram.svg?component';
import IconPinterest from '../../assets/icons/pinterest.svg?component';
import IconTwitter from '../../assets/icons/twitter.svg?component';
</script>

<template>
  <footer class="sp-c-footer">
    <span class="sp-c-footer__item">
      <small> All Content &copy; Copyright Sally Payne </small>
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

<style src="./styles.css" />
