<template>
  <nav class="sp-c-pagination">
    <h2 class="sp-c-pagination__title" id="pagination">
      Page:
      <span class="sp-u-sr-only"> {{ currentPage }} of {{ totalPage }} </span>
    </h2>
    <ul class="sp-c-pagination__list" aria-labelledby="pagination">
      <li class="sp-c-pagination__item" v-if="showNextPrev">
        <component
          :is="disablePrev ? 'span' : 'a'"
          :href="!disablePrev ? href(currentPage - 1) : undefined"
          :class="['sp-c-pagination__link', disablePrev && 'is-disabled']"
        >
          <ArrowLeft class="sp-c-pagination__icon" />
          <span class="sp-u-sr-only"> Previous page </span>
        </component>
      </li>
      <template v-for="n in pages" :key="n.page">
        <li v-if="n.show" class="sp-c-pagination__item">
          <component
            :is="n.page == currentPage ? 'span' : 'a'"
            :href="n.page != currentPage ? href(n.page) : undefined"
            :class="[
              'sp-c-pagination__link',
              n.disable && 'is-disabled',
              n.page == currentPage && 'is-active',
            ]"
            :aria-label="`Page ${n.page}`"
          >
            {{ n.content }}
          </component>
        </li>
      </template>
      <li class="sp-c-pagination__item" v-if="showNextPrev">
        <component
          :is="disableNext ? 'span' : 'a'"
          :href="!disableNext ? href(currentPage + 1) : undefined"
          :class="['sp-c-pagination__link', disableNext && 'is-disabled']"
        >
          <ArrowRight class="sp-c-pagination__icon" />
          <span class="sp-u-sr-only"> Next page </span>
        </component>
      </li>
    </ul>
  </nav>
</template>

<script>
import ArrowLeft from './../../assets/icons/arrow-left.svg';
import ArrowRight from './../../assets/icons/arrow-right.svg';

export default {
  components: {
    ArrowLeft,
    ArrowRight,
  },
  props: {
    basePath: {
      type: String,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    myData: {
      default: null,
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    showNextPrev: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pages() {
      let items = [];

      for (let i = 0; i < this.totalPage; i++) {
        let page = {
          content: i + 1,
          page: i + 1,
          show: false,
        };

        items[i] = page;
      }

      let page1 = {
        content: '…',
        page: this.currentPage - this.pageRange + 1,
        show: false,
      };

      let page2 = {
        content: '…',
        page: this.currentPage + this.pageRange - 1,
        show: false,
      };

      items.splice(1, 0, page1);
      items.splice(items.length - 1, 0, page2);

      for (let i = 0; i < items.length; i++) {
        if (i == 0 || i == items.length - 1) items[i].show = true;

        if (this.currentPage <= this.pageRange) {
          if (this.currentPage == this.pageRange) {
            if (i >= 2 && i <= this.pageRange + 1) items[i].show = true;
          } else {
            if (i >= 2 && i <= this.pageRange) items[i].show = true;
          }

          items[items.length - 2].show = true;
        } else if (this.currentPage > this.pageRange) {
          if (
            i >= this.currentPage - 1 &&
            this.currentPage + 2 < items.length - 2 &&
            i <= this.currentPage + 1
          ) {
            items[1].show = true;
            items[items.length - 2].show = true;
            items[i].show = true;
          } else if (
            i >= items.length - 2 - this.pageRange &&
            this.currentPage + 2 >= items.length - 2
          ) {
            items[1].show = true;
            items[items.length - 2].show = false;
            items[i].show = true;
          }
        }
      }

      return items;
    },
    disablePrev: ({ currentPage }) => currentPage == 1,
    disableNext: ({ currentPage, totalPage }) => currentPage == totalPage,
  },
  methods: {
    href(page) {
      const { basePath } = this;
      const path = `${basePath}/`;
      if (page < 2) {
        return path;
      }
      return `${basePath}/${page}`;
    },
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
@import '../../assets/styles/tools';

.sp-c-pagination {
  display: flex;
  padding: var(--space-y-8) 0 0;
  align-items: center;
  justify-content: flex-end;
}

.sp-c-pagination__title {
  margin: 0 10px 0 0;
  padding: 0;
  font-size: var(--font-size-4);
}

.sp-c-pagination__list {
  margin: 0;
  padding: 0;
}

.sp-c-pagination__item {
  display: inline-block;
}

.sp-c-pagination__link {
  display: inline-block;
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 18px;
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  &.is-disabled {
    opacity: 0.3;
  }

  &.is-active {
    font-weight: 700;
    opacity: 1;
  }
}

.sp-c-pagination__icon {
  display: inline-block;
  vertical-align: middle;
  width: 18px;
  height: 18px;
  fill: currentColor;
}
</style>
