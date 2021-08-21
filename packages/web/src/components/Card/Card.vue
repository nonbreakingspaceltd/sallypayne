<template>
  <article class="sp-c-card" :class="['sp-c-card', additionalCssClasses]">
    <figure class="sp-c-card__media" v-if="image">
      <picture
        :style="{
          'background-color': image.backgroundColor,
        }"
        class="c-picture__picture"
      >
        <template v-if="image.sources">
          <source
            v-for="(source, index) in image.sources"
            :key="index"
            :srcset="source.srcset.join(',')"
            :type="source.type"
            :media="source.media"
          />
        </template>
        <img
          :src="image.src"
          :alt="image.alt"
          :width="image.width"
          :height="image.height"
          class="sp-c-card__media__image"
        />
      </picture>
    </figure>
    <div class="sp-c-card__content">
      <h2 class="sp-c-card__title">
        <a :href="link" class="sp-c-card__link" v-if="link">
          {{ title }}
        </a>
        <span v-else>
          {{ title }}
        </span>
      </h2>
      <div class="sp-c-card__price" v-if="price">&pound;{{ price }}</div>
      <div class="sp-c-card__body">
        <slot />
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    link: String,
    image: Object,
    price: String,
    variant: String,
  },
  computed: {
    additionalCssClasses() {
      const { variant } = this;
      return variant && `sp-c-card--${variant}`;
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-card {
  display: block;
  background-color: #ffffff;

  &__link {
    display: block;
    text-decoration: none;
  }

  &__media {
    padding: 0;
    margin: 0;

    &__picture {
      display: block;
    }

    &__image {
      display: block;
      width: 100%;
      height: auto;
      max-width: 100%;
      aspect-ratio: attr(width) / attr(height);
    }
  }

  &--journal &__media,
  &--product &__media {
    padding: 16px 16px 0;
  }

  &--work &__media {
    padding: 16px;
  }

  &__content {
    padding: 24px 16px 16px;
  }

  &--journal a:hover &__title,
  &--journal a:focus &__title {
    color: var(--color-brand-goldensand);
  }

  &--product a:hover &__title,
  &--product a:focus &__title {
    color: var(--color-brand-acapulco);
  }

  &__body {
    margin: 8px 0 0;
  }

  &__price {
    font-weight: 700;
    font-size: 24px;
  }
}
</style>
