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
      <div v-if="$slots.default" class="sp-c-card__body">
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

<style lang="pcss">
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
  padding: var(--space-y-2) var(--space-x-2) 0;

  @media (--mq-sm) {
    padding: var(--space-y-4) var(--space-x-4) 0;
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
  padding: var(--space-y-4) var(--space-x-2) var(--space-y-2);

  @media (--mq-sm) {
    padding: var(--space-y-6) var(--space-x-4) var(--space-y-4);
  }
}

.sp-c-card__title {
  font-size: var(--font-size-4);
  color: var(--color-black);

  @media (--mq-sm) {
    font-size: var(--font-size-3);
  }
}

.sp-c-card__link {
  color: currentColor;

  .is-clickable:hover &,
  .is-clickable:focus & {

    .sp-c-card--scrapbook& {
      color: var(--color-brand-manhattan);
    }

    .sp-c-card--product& {
      color: var(--color-brand-acapulco);
    }
  }
}

.sp-c-card__body {
  margin: var(--space-y-2) 0 0;
  font-size: var(--font-size-7);
  word-wrap: break-word;

  @media (--mq-sm) {
    font-size: var(--font-size-6);
  }
}

.sp-c-card__subtitle {
  font-weight: 700;
  margin: var(--space-y-2) 0 0;
  font-size: var(--font-size-7);
  word-wrap: break-word;

  @media (--mq-sm) {
    font-size: var(--font-size-6);
  }
}
</style>
