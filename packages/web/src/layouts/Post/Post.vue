<template>
  <article class="sp-l-post">
    <header class="sp-l-post__header">
      <h1 class="sp-l-post__title">
        {{ title }}
      </h1>
      <p class="sp-l-post__published-date">
        {{ publishedDate }}
      </p>
      <BackLink label="Back to journal" path="/journal" />
    </header>
    <div class="sp-l-post__body sp-l-flow">
      <SanityBlocks :blocks="body" :serializers="serializers" />
    </div>
  </article>
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import Picture from '../../components/Picture';
import BackLink from '../../components/BackLink';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: String,
      required: true,
    },
    body: {
      type: Array,
      required: true,
    },
  },
  components: {
    SanityBlocks,
    BackLink,
  },
  setup() {
    const serializers = {
      types: {
        picture: Picture,
      },
    };
    return {
      serializers,
    };
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-l-post {
  max-width: 704px;
  margin: 0 auto;

  &__header {
    padding-bottom: 16px;
  }

  &__title {
    margin-bottom: 16px;
    color: var(--color-brand-goldensand);
  }

  &__published-date {
    font-weight: 700;
  }
}
</style>
