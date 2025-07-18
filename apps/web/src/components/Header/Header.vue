<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import IconClose from '../../assets/icons/close.svg';
import IconMenu from '../../assets/icons/menu.svg';
import Bird from '../../assets/images/bird.svg';
import Logo from '../../assets/images/logo.svg';
import FocusLoop from '../FocusLoop/FocusLoop.vue';
import type { HeaderProps } from './types';

const props = defineProps<HeaderProps>();

// Refs
const menuActive = ref(false);
const menuExpanded = ref<boolean | undefined>(undefined);
const isClient = ref(false);
const smallscreen = ref(true);
const menuToggle = ref<HTMLButtonElement | null>(null);

// Memoized functions
const handleResize = () => {
  const width = window.innerWidth;
  smallscreen.value = width < 1024;
};

const testExpanded = () => {
  menuExpanded.value = smallscreen.value ? menuActive.value : undefined;
};

const closeMenu = () => {
  menuActive.value = false;
  menuToggle.value?.focus();
  testExpanded();
};

const openMenu = () => {
  menuActive.value = true;
  menuToggle.value?.focus();
  testExpanded();
};

const toggleMenu = () => {
  menuActive.value ? closeMenu() : openMenu();
};

const linkVariant = (label: string): string => {
  return `sp-c-header__nav__link--${label.toLowerCase().replace(/\W/g, '')}`;
};

// Lifecycle hooks
onMounted(() => {
  isClient.value = true;
  window.addEventListener('resize', handleResize);
  handleResize();
  testExpanded();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <FocusLoop
    as="header"
    :disabled="!menuActive"
    :class="['sp-c-header', menuActive && 'is-nav-active', props.class]"
    @keydown.esc="closeMenu"
  >
    <div class="sp-c-header__inner">
      <div class="sp-c-header__logo">
        <a href="/" class="sp-c-header__logo__link">
          <Logo class="sp-c-header__logo__main" />
          <span class="sp-c-header__logo__bird">
            <Bird aria-hidden="true" />
          </span>
          <span class="sp-u-sr-only">{{ title }}</span>
        </a>
      </div>
      <button
        v-if="smallscreen"
        ref="menuToggle"
        :class="['sp-c-header__menu-toggle', menuActive && 'is-nav-active']"
        @click="toggleMenu"
        aria-controls="nav"
        aria-haspopup="true"
        :aria-expanded="menuExpanded"
      >
        <span class="sp-u-sr-only">
          {{ menuActive ? 'Close navigation' : 'Toggle navigation' }}
        </span>
        <component
          :is="menuActive ? IconClose : IconMenu"
          class="sp-c-header__menu-toggle__icon"
          aria-hidden="true"
        />
      </button>
      <nav
        id="nav"
        :class="['sp-c-header__nav', menuActive && 'is-nav-active']"
        role="navigation"
        v-if="!isClient || !smallscreen || menuActive"
        tabindex="-1"
      >
        <ul class="sp-c-header__nav__menu">
          <li
            v-for="link in links"
            :key="link.href"
            class="sp-c-header__nav__item"
          >
            <a
              :href="link.href"
              :class="[
                'sp-c-header__nav__link',
                linkVariant(link.label),
                link.current && 'is-active',
              ]"
            >
              <span class="sp-c-header__nav__link__label">{{ link.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </FocusLoop>
</template>

<style src="./styles.css" />
