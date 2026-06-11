<script setup lang="ts">
import classNames from 'classnames';
import { computed } from 'vue';
import ArrowRight from '../../assets/icons/arrow-right.svg?component';
import Picture from '../Picture/Picture.vue';
import type { ShowcaseProps } from './types';

const props = defineProps<ShowcaseProps>();

const classes = computed(() => {
  return classNames('sp-c-showcase', props.class);
});
</script>

<template>
  <ul :class="classes">
    <li
      v-for="item in items"
      :key="item.key"
      class="sp-c-showcase__item"
      :style="item.backgroundColor ? { '--sp-showcase-bg': item.backgroundColor } : undefined"
    >
      <a :href="item.href" class="sp-c-showcase__link">
        <div class="sp-c-showcase__media">
          <Picture
            v-if="item.image"
            v-bind="item.image"
            class="sp-c-showcase__picture"
          />
        </div>
        <div class="sp-c-showcase__content">
          <Picture
            v-if="item.logo"
            v-bind="item.logo"
            class="sp-c-showcase__logo"
          />
          <h2 class="sp-c-showcase__title">{{ item.title }}</h2>
          <p v-if="item.excerpt" class="sp-c-showcase__excerpt">
            {{ item.excerpt }}
          </p>
          <span class="sp-c-showcase__more">
            See more
            <ArrowRight class="sp-c-showcase__more__icon" aria-hidden="true" />
          </span>
        </div>
      </a>
    </li>
  </ul>
</template>

<style src="./styles.css" />
