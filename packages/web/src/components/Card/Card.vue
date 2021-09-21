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
  background-color:var(--color-white);
}

.sp-c-card__link {
  display: block;
  text-decoration: none;
}

.sp-c-card__media {
  padding: 0;
  margin: 0;

  .sp-c-card--journal &,
  .sp-c-card--product & {
    padding: 16px 16px 0;
  }

  .sp-c-card--work & {
    padding: 16px;
  }
}

.sp-c-card__media__picture {
  display: block;
}

.sp-c-card__media__image {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  aspect-ratio: attr(width) / attr(height);
}

.sp-c-card__content {
  padding: 24px 16px 16px;
}

.sp-c-card__title {

  a:hover &,
  a:focus & {

    .sp-c-card--journal & {
      color: var(--color-brand-goldensand);
    }

    .sp-c-card--product & {
      color: var(--color-brand-acapulco);
    }
  }
}

.sp-c-card__body {
  margin: 8px 0 0;
}

.sp-c-card__price {
  font-weight: 700;
  font-size: 24px;
}
</style>
