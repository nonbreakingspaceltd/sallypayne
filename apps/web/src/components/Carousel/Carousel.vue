<script setup lang="ts">
import classNames from 'classnames';
import { computed, onBeforeUnmount, ref, useId } from 'vue';
import ArrowLeft from '../../assets/icons/arrow-left.svg?component';
import ArrowRight from '../../assets/icons/arrow-right.svg?component';
import Picture from '../Picture/Picture.vue';
import type { CarouselProps } from './types';

const props = defineProps<CarouselProps>();

const trackId = useId();
const track = ref<HTMLUListElement | null>(null);
const current = ref(0);

const classes = computed(() => {
  return classNames(
    'sp-c-carousel',
    props.variants?.map((variant) => `sp-c-carousel--${variant}`),
    props.class,
  );
});

const hasMultipleSlides = computed(() => props.slides.length > 1);
const hasCaptions = computed(() =>
  props.slides.some((slide) => slide.title || slide.caption),
);
const currentSlide = computed(() => props.slides[current.value]);

const disablePrev = computed(() => current.value === 0);
const disableNext = computed(() => current.value === props.slides.length - 1);

let scrollFrame: number | undefined;

const handleScroll = () => {
  if (scrollFrame) {
    return;
  }
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = undefined;
    const slideWidth = track.value?.clientWidth;
    if (track.value && slideWidth) {
      current.value = Math.min(
        props.slides.length - 1,
        Math.max(0, Math.round(track.value.scrollLeft / slideWidth)),
      );
    }
  });
};

const goTo = (index: number) => {
  if (!track.value) {
    return;
  }
  const target = Math.min(props.slides.length - 1, Math.max(0, index));
  const reducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  track.value.scrollTo({
    left: target * track.value.clientWidth,
    behavior: reducedMotion ? 'auto' : 'smooth',
  });
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    goTo(current.value - 1);
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    goTo(current.value + 1);
  }
};

onBeforeUnmount(() => {
  if (scrollFrame) {
    cancelAnimationFrame(scrollFrame);
  }
});
</script>

<template>
  <section
    :class="classes"
    :style="backgroundColor ? { backgroundColor } : undefined"
    :aria-label="label"
    aria-roledescription="carousel"
  >
    <div class="sp-c-carousel__main">
      <ul
        :id="trackId"
        ref="track"
        class="sp-c-carousel__track"
        :tabindex="hasMultipleSlides ? 0 : undefined"
        @scroll.passive="handleScroll"
        @keydown="handleKeydown"
      >
        <li
          v-for="(slide, index) in slides"
          :key="slide.key"
          class="sp-c-carousel__slide"
          role="group"
          aria-roledescription="slide"
          :aria-label="`${index + 1} of ${slides.length}`"
        >
          <Picture
            class="sp-c-carousel__picture"
            v-bind="slide.image"
            :loading="index === 0 ? 'eager' : 'lazy'"
          />
        </li>
      </ul>

      <template v-if="hasMultipleSlides">
        <button
          type="button"
          class="sp-c-carousel__arrow sp-c-carousel__arrow--prev"
          :disabled="disablePrev"
          :aria-controls="trackId"
          @click="goTo(current - 1)"
        >
          <ArrowLeft class="sp-c-carousel__arrow__icon" aria-hidden="true" />
          <span class="sp-u-sr-only">Previous slide</span>
        </button>
        <button
          type="button"
          class="sp-c-carousel__arrow sp-c-carousel__arrow--next"
          :disabled="disableNext"
          :aria-controls="trackId"
          @click="goTo(current + 1)"
        >
          <ArrowRight class="sp-c-carousel__arrow__icon" aria-hidden="true" />
          <span class="sp-u-sr-only">Next slide</span>
        </button>
      </template>
    </div>

    <div
      v-if="hasCaptions || hasMultipleSlides"
      class="sp-c-carousel__footer"
    >
      <p class="sp-c-carousel__caption" aria-live="polite" aria-atomic="true">
        <span class="sp-u-sr-only">
          Slide {{ current + 1 }} of {{ slides.length }}{{ currentSlide?.title ? ':' : '' }}
        </span>
        <strong v-if="currentSlide?.title" class="sp-c-carousel__caption__title">
          {{ currentSlide.title }}
        </strong>
        <span v-if="currentSlide?.caption" class="sp-c-carousel__caption__detail">
          {{ currentSlide.caption }}
        </span>
      </p>
      <div v-if="hasMultipleSlides" class="sp-c-carousel__dots">
        <button
          v-for="(slide, index) in slides"
          :key="slide.key"
          type="button"
          :class="['sp-c-carousel__dot', index === current && 'is-active']"
          :aria-current="index === current ? 'true' : undefined"
          :aria-controls="trackId"
          @click="goTo(index)"
        >
          <span class="sp-u-sr-only">
            Go to slide {{ index + 1 }} of {{ slides.length }}
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<style src="./styles.css" />
