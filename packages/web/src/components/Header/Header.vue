<template>
  <header class="sp-c-header">
    <div class="sp-c-header__logo">
      <a href="/" class="sp-c-header__logo__link">
        <Logo class="sp-c-header__logo__main" />
        <span class="sp-c-header__logo__bird">
          <Bird aria-hidden="true" />
        </span>
      </a>
    </div>
    <button
      :class="['sp-c-header__menu-toggle', menuActive && 'is-active']"
      @click="toggleMenu()"
      v-if="smallscreen"
      aria-controls="nav"
      aria-haspopup="true"
      :aria-expanded="menuExpanded"
    >
      <span class="sp-u-sr-only">
        {{ menuActive ? 'Close navigation' : 'Toggle navigation' }}
      </span>
      <IconMenu class="sp-c-header__menu-toggle__icon" aria-hidden="true" v-if="!menuActive" />
      <IconClose class="sp-c-header__menu-toggle__icon" aria-hidden="true" v-if="menuActive" />
    </button>
    <nav
      id="nav"
      :class="['sp-c-header__nav', menuActive && 'is-active']"
      role="navigation"
      v-if="!isClient || !smallscreen || menuActive"
      tabindex="-1"
    >
      <ul class="sp-c-header__nav__menu">
        <li class="sp-c-header__nav__item" v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            :class="[
              'sp-c-header__nav__link',
              linkVariant(link.label),
              link.current && 'is-active',
            ]"
          >
            <span class="sp-c-header__nav__link__label">
              {{ link.label }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import IconMenu from './../../assets/icons/menu.svg';
import IconClose from './../../assets/icons/close.svg';
import Bird from './../../assets/images/bird.svg';
import Logo from './../../assets/images/logo.svg';

export default {
  name: 'Header',
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  components: {
    IconMenu,
    IconClose,
    Bird,
    Logo,
  },
  setup() {
    const menuActive = ref(false);
    const menuExpanded = ref(null);
    const isClient = ref(false);
    const smallscreen = ref(true);

    const handleResize = () => {
      smallscreen.value = window.innerWidth < 1024;
    };

    const toggleMenu = () => {
      menuActive.value = !menuActive.value;
      testExpanded();
    };

    const linkVariant = (label) => {
      const parsedLabel = label.toLowerCase().replace(/\W/g, '');
      return `sp-c-header__nav__link--${parsedLabel}`;
    };

    const testExpanded = () => {
      let test = null;
      if (smallscreen.value) {
        test = menuActive.value ? 'true' : 'false';
      }
      menuExpanded.value = test;
    };

    onMounted(() => {
      isClient.value = true;
      window.addEventListener('resize', handleResize);
      handleResize();
      testExpanded();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      menuActive,
      menuExpanded,
      isClient,
      smallscreen,
      handleResize,
      toggleMenu,
      linkVariant,
    };
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-header {
  padding: calc(var(--baseline) * 4) calc(var(--baseline) * 4);
  background-color: rgba(255, 255, 255, 0.95);
  position: relative;
  display: flex;
  flex-wrap: wrap;

  .js & {
    position: sticky;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
  }

  @media (--mq-m) {
    padding: calc(var(--baseline) * 4) calc(var(--baseline) * 8);
  }

  @media (--mq-l) {
    padding: 28px 32px;
    backdrop-filter: blur(5px);
  }
}

.sp-c-header__logo {
  height: 48px;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  @media (--mq-m) {
    height: 76px;
  }

  @media (--mq-l) {
    margin: -8px 0 -24px;
  }
}

.sp-c-header__logo__link {
  display: block;
  height: 100%;
}

.sp-c-header__logo__main {
  height: 100%;
  width: auto;
  fill: var(--color-black);
}

.sp-c-header__logo__bird {
  position: absolute;
  width: 32px;
  top: 18%;
  left: 80%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
  backface-visibility: hidden;

  @media (--mq-m) {
    width: 48px;
  }

  .sp-o-bird {
    animation: fly 1500ms infinite alternate;
    max-width: 100%;
    overflow: visible;
    transform: translateZ(0);
    backface-visibility: hidden;

    &__body-outline {
      fill: #21657c;
    }

    &__body {
      fill: var(--color-white);
    }

    &__eye {
      fill: #21657c;
      animation: blink 3s infinite;
      transform-origin: 50% 50%;
      transform-box: fill-box;
    }

    &__dots {
      fill: #f5aaa6;
    }

    &__wing-1 {
      fill: #f5aaa6;
      transform-origin: 100% 100%;
      animation: flap-alt 600ms infinite alternate;
      transform-box: fill-box;
    }

    &__wing-2 {
      fill: #f8db5b;
      transform-origin: 100% 100%;
      animation: flap 600ms infinite alternate;
      transform-box: fill-box;
    }

    @keyframes blink {
      0%,
      100% {
        transform: scale(1, 0.05);
      }
      5%,
      95% {
        transform: scale(1, 1);
      }
    }

    @keyframes fly {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-15%);
      }
    }

    @keyframes flap {
      from {
        transform: rotate(0) translateY(0);
      }
      to {
        transform: rotate(5deg) translateY(-5%);
      }
    }

    @keyframes flap-alt {
      from {
        transform: rotate(0) translateY(0);
      }
      to {
        transform: rotate(-5deg) translateY(-5%);
      }
    }
  }
}

.sp-c-header__menu-toggle {
  display: none;

  .js & {
    /* reset */
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;

    /* core */
    width: 24px;
    height: 24px;
    display: block;
    position: absolute;
    top: 50%;
    right: calc(var(--baseline) * 4);
    transform: translateY(-50%);
    margin-left: auto;

    @media (--mq-m) {
      width: 32px;
      height: 32px;
      right: calc(var(--baseline) * 8);
    }

    @media (--mq-l) {
      display: none;
    }
  }

  &__svg {
    width: 100%;
    fill: var(--color-text);
  }

  &:hover &__svg,
  &:focus &__svg {
    fill: var(--color-black);
  }
}

.sp-c-header__nav {
  width: 100%;
  background-color: var(--color-white);
  margin-left: auto;
  align-items: center;
  justify-content: center;
  outline: none;

  .js & {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;

    @media (--mq-m) {
      top: 108px;
      height: calc(100% - 108px);
    }

    @media (--mq-l) {
      width: auto;
      position: relative;
      background-color: transparent;
      top: auto;
      right: auto;
      bottom: auto;
      left: auto;
      display: flex;
    }

    &.is-active {
      display: flex;
    }
  }

  &__menu {
    margin: 0;
    padding: 0;

    @media (--mq-l) {
      display: flex;
    }
  }

  &__item {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;

    @media (--mq-l) {
      display: block;
      margin-left: auto;
    }

    &:before {
      content: '\200B';
    }
  }

  &__link {
    font-family: var(--font-family-heading);
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 4px;
    font-weight: 700;
    font-size: 42px;
    line-height: 56px;
    margin: 8px 0;
    display: inline-block;
    text-align: center;
    color: var(--color-text);
    -webkit-tap-highlight-color: transparent;

    @media (--mq-l) {
      margin: 0 0 0 calc(var(--baseline) * 8);
      font-size: 30px;
      line-height: 54px;
      letter-spacing: 3px;
    }

    &--about {
      &:hover,
      &:focus,
      &.is-active {
        color: var(--color-brand-goldensand);
      }
    }

    &--shop {
      &:hover,
      &:focus,
      &.is-active {
        color: var(--color-brand-acapulco);
      }
    }

    &--scrapbook {
      &:hover,
      &:focus,
      &.is-active {
        color: var(--color-brand-manhattan);
      }
    }

    &--contact {
      &:hover,
      &:focus,
      &.is-active {
        color: var(--color-brand-danube);
      }
    }

    &__label {
      display: block;
      position: relative;
      overflow: hidden;

      @media (--mq-l) {
        display: block;
      }

      &::after {
        content: '';
        border-top: 4px dotted currentColor;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        visibility: hidden;
        height: 1px;
      }
    }

    &:hover &__label,
    &:focus &__label,
    &.active &__label {
      &::after {
        visibility: visible;
      }
    }
  }
}
</style>
