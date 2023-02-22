<template>
  <div class="sp-c-home-media">
    <img
      src="/images/home-20230203.svg"
      class="sp-c-home-media__image"
      alt="Illustration of Sally Payne style characters saying 'Hello'"
      width="2000"
      height="1227"
    />
  </div>
</template>

<script>
// import { dragscrollNext } from 'vue-dragscroll';

export default {
  name: 'HomeCanvas',
  // directives: {
  //   dragscroll: dragscrollNext,
  // },
  // computed: {
  //   isTouch: () => {
  //     return 'ontouchstart' in window;
  //   },
  // },
};
</script>

<style lang="postcss">
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
