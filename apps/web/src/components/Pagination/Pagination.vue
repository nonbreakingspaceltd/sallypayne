<script setup lang="ts">
import { computed } from 'vue';
import type { PaginationPage, PaginationProps } from './types';

const props = withDefaults(defineProps<PaginationProps>(), {
  currentPage: 1,
  myData: null,
  pageRange: 3,
  showNextPrev: false,
});

const generatePageItem = (
  content: string | number,
  page: number,
  show = false,
): PaginationPage => ({
  content,
  page,
  show,
});

const _pages = computed((): PaginationPage[] => {
  // Generate basic page numbers
  const items = Array.from({ length: props.totalPage }, (_, i) =>
    generatePageItem(i + 1, i + 1, false),
  );

  // Insert ellipsis markers
  const leftEllipsis = generatePageItem(
    '…',
    props.currentPage - props.pageRange + 1,
  );
  const rightEllipsis = generatePageItem(
    '…',
    props.currentPage + props.pageRange - 1,
  );

  items.splice(1, 0, leftEllipsis);
  items.splice(items.length - 1, 0, rightEllipsis);

  // Always show first and last pages
  items[0].show = true;
  items[items.length - 1].show = true;

  // Handle visibility logic for different page ranges
  if (props.currentPage <= props.pageRange) {
    // Near start of pagination
    const endRange =
      props.currentPage === props.pageRange
        ? props.pageRange + 1
        : props.pageRange;
    for (const item of items.slice(2, endRange + 1)) {
      item.show = true;
    }
    items[items.length - 2].show = true;
  } else {
    // Middle or end of pagination
    const isNearEnd = props.currentPage + 2 >= items.length - 2;

    if (isNearEnd) {
      // Near end of pagination
      items[1].show = true;
      for (const item of items.slice(items.length - 2 - props.pageRange)) {
        item.show = true;
      }
    } else {
      // Middle of pagination
      items[1].show = true;
      items[items.length - 2].show = true;
      for (const item of items.slice(
        props.currentPage - 1,
        props.currentPage + 2,
      )) {
        item.show = true;
      }
    }
  }

  return items;
});

const _disablePrev = computed(() => props.currentPage === 1);
const _disableNext = computed(() => props.currentPage === props.totalPage);

const _href = (page: number): string => {
  const basePath = props.basePath || '';
  return page < 2 ? basePath : `${basePath}/${page}`;
};
</script>

<template>
  <nav class="sp-c-pagination">
    <h2 class="sp-c-pagination__title" id="pagination">
      Page:
      <span class="sp-u-sr-only">{{ currentPage }} of {{ totalPage }}</span>
    </h2>

    <ul class="sp-c-pagination__list" aria-labelledby="pagination">
      <!-- Previous button -->
      <li v-if="showNextPrev" class="sp-c-pagination__item">
        <component
          :is="disablePrev ? 'span' : 'a'"
          :href="!disablePrev ? href(currentPage - 1) : undefined"
          :class="['sp-c-pagination__link', { 'is-disabled': disablePrev }]"
        >
          <ArrowLeft class="sp-c-pagination__icon" />
          <span class="sp-u-sr-only">Previous page</span>
        </component>
      </li>

      <!-- Page numbers -->
      <li
        v-for="page in pages"
        :key="page.page"
        v-show="page.show"
        class="sp-c-pagination__item"
      >
        <component
          :is="page.page === currentPage ? 'span' : 'a'"
          :href="page.page !== currentPage ? href(page.page) : undefined"
          :class="[
            'sp-c-pagination__link',
            {
              'is-disabled': page.disable,
              'is-active': page.page === currentPage
            }
          ]"
          :aria-label="`Page ${page.page}`"
        >
          {{ page.content }}
        </component>
      </li>

      <!-- Next button -->
      <li v-if="showNextPrev" class="sp-c-pagination__item">
        <component
          :is="disableNext ? 'span' : 'a'"
          :href="!disableNext ? href(currentPage + 1) : undefined"
          :class="['sp-c-pagination__link', { 'is-disabled': disableNext }]"
        >
          <ArrowRight class="sp-c-pagination__icon" />
          <span class="sp-u-sr-only">Next page</span>
        </component>
      </li>
    </ul>
  </nav>
</template>

<style src="./styles.css" />
