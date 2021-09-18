<template>
  <div class="sp-c-homecanvas">
    <div class="sp-c-homecanvas__inner">
      <div class="sp-c-homecanvas__scroll-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 37.5">
          <g fill="#000" fill-rule="evenodd">
            <path
              d="M9.127 19.206c-.274 1.33-.13 2.642.588 3.631l.875 1.205c.974 1.34 4.006 2.5 4.544 2.72.88.36 2.272.847 3.359 1.175a.5.5 0 0 0 .283-.96 54.238 54.238 0 0 1-3.27-1.143c-.52-.208-3.337-1.32-4.106-2.38l-.876-1.205c-.527-.726-.634-1.716-.415-2.854a9.05 9.05 0 0 1 .213-.827l1.81 2.488a.5.5 0 0 0 .697.112c.226-.164.304-.435.112-.7l-6.76-9.303A1 1 0 1 1 7.8 9.989l4.996 6.877a.5.5 0 1 0 .809-.588l-1.47-2.022a1 1 0 1 1 1.618-1.176l1.47 2.023a.5.5 0 1 0 .809-.588L15.15 13.3a1 1 0 1 1 1.618-1.175l1.47 2.022a.5.5 0 1 0 .809-.587l-.882-1.214a1 1 0 1 1 1.618-1.176l2.057 2.832c1.925 2.65 2.141 6.35 3.672 8.457a.5.5 0 1 0 .81-.588c-1.32-1.816-1.74-5.797-3.673-8.457l-2.057-2.831a2 2 0 0 0-3.495.484 2 2 0 0 0-3.015.954 2 2 0 0 0-2.965.832L8.61 9.402a2 2 0 1 0-3.236 2.35l4.238 5.834a9.053 9.053 0 0 0-.484 1.62ZM11.854 5.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L10.707 3H20.5a.5.5 0 1 1 0 1h-9.796l1.15 1.146Z"
            />
          </g>
        </svg>
      </div>
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
import { ref, onMounted } from 'vue';

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

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-homecanvas {
  width: 100%;
  height: 100%;
  overflow-x: auto;

  @media (--mq-m) {
    display: flex;
    align-content: center;
  }

  &__scroll-icon {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 3;

    @media (--mq-m) {
      display: none;
    }
  }

  &__inner {
    width: 120vh;
    position: relative;
    margin: 0 auto;

    @media screen and (max-height: 860px) {
      max-width: 1280px;
    }

    @media (--mq-m) {
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

  &__placeholder {
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

  &__iframe {
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
}
</style>
