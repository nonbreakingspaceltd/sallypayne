<template>
  <nav class="sp-c-backlink">
    <a class="sp-c-backlink__link" :href="path">
      <ArrowLeft class="sp-c-backlink__icon" />
      <span class="sp-u-sr-only">
        {{ label }}
      </span>
    </a>
  </nav>
</template>

<script>
import ArrowLeft from '../../assets/icons/arrow-left.svg?component';
export default {
  components: {
    ArrowLeft,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="pcss">
@import '../../assets/styles/tools';

.sp-c-backlink {
  display: none;

  @media (--mq-lg) {
    position: fixed;
    width: 32px;
    top: 164px;
    left: 32px;
    z-index: 2;
    display: block;
  }
}
</style>
