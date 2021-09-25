<template>
  <article :class="classes" @click="handleClick">
    <Picture class="sp-c-card__media" v-bind="image" v-if="image" />
    <div class="sp-c-card__content">
      <h2 class="sp-c-card__title">
        <a :href="href" class="sp-c-card__link" v-if="href" ref="link">
          {{ title }}
        </a>
        <template v-else>
          {{ title }}
        </template>
      </h2>
      <div class="sp-c-card__subtitle" v-if="subtitle">
        {{ subtitle }}
      </div>
      <div class="sp-c-card__body">
        <slot />
      </div>
    </div>
  </article>
</template>

<script>
import classNames from 'classnames';
import Picture from '../Picture';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    href: {
      type: String,
    },
    image: {
      type: Object,
    },
    subtitle: {
      type: String,
    },
    variants: {
      type: Array,
    },
  },
  components: {
    Picture,
  },
  computed: {
    classes: ({ variants, href }) => {
      const baseClass = 'sp-c-card';
      return classNames(
        baseClass,
        href && 'is-clickable',
        variants && variants.map((variant) => `${baseClass}--${variant}`)
      );
    },
  },
  methods: {
    handleClick() {
      const link = this.$refs.link;
      if (this.href && link) {
        link.click();
      }
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-card {
  display: block;
  background-color: var(--color-white);
  color: var(--color-brand-abbey);

  &.is-clickable {
    cursor: pointer;
  }
}

.sp-c-card__link {
  display: block;
  text-decoration: none;
}

.sp-c-card__media {
  padding: 0;
  margin: 0;

  .sp-c-card--scrapbook &,
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

.sp-c-card__link {
  .is-clickable:hover &,
  .is-clickable:focus & {
    color: var(--color-black);

    .sp-c-card--scrapbook& {
      color: var(--color-brand-goldensand);
    }

    .sp-c-card--productt& {
      color: var(--color-brand-acapulco);
    }
  }
}

.sp-c-card__body {
  margin: 8px 0 0;
}

.sp-c-card__subtitle {
  font-weight: 700;
  margin: 8px 0 0;
}
</style>
