<template>
  <div :class="containerClassNames">
    <div :class="classNames.item" v-for="(item, index) in items" :key="`masonryItem${index}`">
      <div :class="classNames.content">
        <Card
          :title="item.title"
          :subtitle="item.subtitle"
          :href="item.href"
          :image="item.image"
          :variants="[item.variant]"
        >
          <p v-if="item.excerpt">
            {{ item.excerpt }}
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames';
import Card from '../Card';

export default {
  components: {
    Card,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      masonryEvents: ['load', 'resize'],
      classNames: {
        container: 'sp-c-card-masonry',
        item: 'sp-c-card-masonry__item',
        content: 'sp-c-card-masonry__item__content',
      },
      isActive: false,
    };
  },
  watch: {
    items() {
      const vm = this;
      vm.$nextTick(() => {
        vm.resizeAllMasonryItems();
      });
    },
  },
  computed: {
    containerClassNames() {
      return classNames(this.classNames.container, { 'is-active': this.isActive });
    },
  },
  methods: {
    resizeMasonryItem(item) {
      const computedStyle = window.getComputedStyle(this.$el);
      const rowHeight = 1;
      const rowGap = parseInt(computedStyle.getPropertyValue('grid-row-gap'));
      const rowSpan = Math.ceil(
        (item.querySelector(`.${this.classNames.content}`).getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );
      item.style.gridRowEnd = `span ${rowSpan}`;
    },
    resizeAllMasonryItems() {
      var allItems = this.$el.querySelectorAll(`.${this.classNames.item}`);
      allItems.forEach((item) => {
        this.resizeMasonryItem(item);
      });
    },
  },
  beforeMount() {
    const vm = this;
    vm.masonryEvents.forEach((event) => {
      window.addEventListener(event, vm.resizeAllMasonryItems);
    });
  },
  mounted() {
    this.isActive = true;
    if (!window.CSS.supports('grid-template-rows', 'masonry')) {
      this.resizeAllMasonryItems();
      window.dispatchEvent(new Event('resize'));
      console.log('mounted');
    }
  },
  beforeDestroy() {
    const vm = this;
    if (process.isClient) {
      vm.masonryEvents.forEach((event) => {
        window.removeEventListener(event, vm.resizeAllMasonryItems);
      });
    }
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-card-masonry {
  display: grid;
  grid-gap: 16px;

  @media (--mq-s) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  &.is-calculated {
    @media (--mq-s) {
      grid-auto-rows: 0;
    }
  }

  &.is-calculated &__item {
    background-color: #ffffff;
  }
}
.sp-c-card-masonry {
  display: grid;
  grid-gap: 16px;
  grid-template-rows: masonry;

  @media (--mq-s) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  &.is-active &__item {
    background-color: #ffffff;
  }
}
</style>
