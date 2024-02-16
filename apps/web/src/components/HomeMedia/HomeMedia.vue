<script setup>
import imgSrc from './home-20230203.svg?url';
</script>

<template>
  <div class="sp-c-home-media">
    <img
      :src="imgSrc"
      class="sp-c-home-media__image"
      alt="Illustration of Sally Payne style characters saying 'Hello'"
      width="2000"
      height="1227"
    />
  </div>
</template>

<style lang="pcss">
@import '../../assets/styles/tools';

.sp-c-home-media {
  width: 100%;
  overflow: auto;
  flex: 1;
  padding: 0 var(--space-x-4);

  @media (--mq-md) {
    padding: 0 var(--space-x-6);
  }

  @media (--mq-lg) {
    margin-top: auto;
  }
}

.sp-c-home-media__image {
  height: 100%;
  width: auto;
  max-width: none;
  position: relative;
  cursor: grab;

  @media (--mq-md) {
    margin: 0 auto;
  }

  @media (--mq-xxxl) {
    max-width: 3000px;
  }
}
</style>
