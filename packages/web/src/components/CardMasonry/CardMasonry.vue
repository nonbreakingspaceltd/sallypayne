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
      isCalculated: false,
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
      return classNames(this.classNames.container, {
        'is-active': this.isActive,
        'is-calculated': this.isCalculated,
      });
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
      var allItems = Array.from(this.$el.querySelectorAll(`.${this.classNames.item}`));
      allItems.forEach((item) => {
        this.resizeMasonryItem(item);
      });
      this.isCalculated = true;
    },
  },
  mounted() {
    const vm = this;
    this.isActive = true;
    if (!window.CSS.supports('grid-template-rows', 'masonry')) {
      vm.masonryEvents.forEach((event) => {
        window.addEventListener(event, vm.resizeAllMasonryItems);
      });
      this.resizeAllMasonryItems();
      window.dispatchEvent(new Event('resize'));
    }
  },
  beforeDestroy() {
    const vm = this;
    if (process.isClient) {
      if (!window.CSS.supports('grid-template-rows', 'masonry')) {
        vm.masonryEvents.forEach((event) => {
          window.removeEventListener(event, vm.resizeAllMasonryItems);
        });
      }
    }
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-card-masonry {
  display: grid;
  grid-gap: 8px;
  grid-template-rows: masonry;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  @media (--mq-sm) {
    grid-gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }

  @media (--mq-lg) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
}

.sp-c-card-masonry__item {
  .is-calculated & {
    background-color: #ffffff;
  }
}
</style>
