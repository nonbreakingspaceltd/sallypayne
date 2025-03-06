<template>
  <div class="sp-c-homecanvas">
    <div class="sp-c-homecanvas__inner">
      <img class="sp-c-homecanvas__placeholder" :src="placeholder" alt="" />
      <iframe
        ref="iframe"
        :class="['sp-c-homecanvas__iframe', iframeLoaded && 'is-loaded']"
        :src="iframeSrc"
        scrolling="no"
        title="Homepage illustration animation"
        @load="iframeLoaded = true"
        v-show="iframeLoaded"
      />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
  name: 'HomeCanvas',
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const iframe = ref(null);
    const iframeSrc = ref('');
    const iframeLoaded = ref(false);

    onMounted(() => {
      iframeSrc.value = props.src;
    });

    return {
      iframe,
      iframeSrc,
      iframeLoaded,
    };
  },
};
</script>

<style lang="pcss">
@import '../../assets/styles/tools';

.sp-c-homecanvas {
  width: 100%;
  height: 100%;
  overflow-x: auto;

  @media (--mq-md) {
    display: flex;
    align-content: center;
  }
}

.sp-c-homecanvas__inner {
  width: 120vh;
  position: relative;
  margin: 0 auto;

  @media screen and (max-height: 860px) {
    max-width: 1280px;
  }

  @media (--mq-md) {
    width: 100%;
    max-height: 100%;
  }

  @media (--mq-xxl) {
    max-width: 3000px;
  }

  &::after {
    content: '';
    display: block;
    padding-top: 51.26953125%;
    width: 100%;
  }
}

.sp-c-homecanvas__placeholder {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
  filter: blur(5px);

  .is-animation-loaded & {
    display: none;
  }
}

.sp-c-homecanvas__iframe {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  overflow: hidden;
  background: transparent;
}
</style>
