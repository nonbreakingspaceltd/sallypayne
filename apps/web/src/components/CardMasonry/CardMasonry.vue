<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import Card from '../Card/Card.vue';
import type { CardMasonryProps } from './types';

const props = defineProps<CardMasonryProps>();

const resizeObserver = ref<ResizeObserver>();
const columns = ref<number[][]>([[]]);
const container = ref<HTMLDivElement>();
const isJsMasonry = ref(false);

function columnCount(): number {
  if (!container.value) {
    return 1;
  }

  const containerStyles = getComputedStyle(container.value);

  // create dummy element
  const columnElement = document.createElement('div');
  columnElement.classList.add('sp-c-card-masonry__column');
  container.value.appendChild(columnElement);
  const columnStyles = getComputedStyle(columnElement);

  const gap = Number.parseInt(containerStyles.getPropertyValue('gap'), 10);
  const columnWidth = Number.parseInt(
    columnStyles.getPropertyValue('min-width'),
    10,
  );
  const containerWidth = Number.parseInt(
    container.value.getBoundingClientRect().width.toString(),
    10,
  );

  // remove dummy element
  container.value.removeChild(columnElement);

  const count = columnWidth
    ? Math.floor((containerWidth + gap) / (columnWidth + gap))
    : 1;

  return count > 0 ? count : 1;
}

function createColumns(count: number): number[][] {
  return [...new Array(count)].map(() => []);
}

function fillColumns(itemIndex: number): void {
  if (itemIndex >= props.items.length) {
    return;
  }
  nextTick(() => {
    if (!container.value) {
      return;
    }

    const columnElements = [...container.value.children];
    const target = columnElements.reduce((prev, curr) =>
      curr.getBoundingClientRect().height < prev.getBoundingClientRect().height
        ? curr
        : prev,
    ) as HTMLElement;
    columns.value[Number(target.getAttribute('data-index'))].push(itemIndex);
    fillColumns(itemIndex + 1);
  });
}

function redraw(force = false): void {
  if (columns.value.length === columnCount() && !force) {
    return;
  }
  columns.value = createColumns(columnCount());
  fillColumns(0);
}

columns.value = [props.items.map((_item, index) => index)];

onMounted(() => {
  const supportsGridMasonry = window.CSS.supports(
    'grid-template-rows',
    'masonry',
  );
  if (!supportsGridMasonry && container.value) {
    isJsMasonry.value = true;
    resizeObserver.value = new ResizeObserver(() => redraw());
    columnCount();
    redraw();
    resizeObserver.value.observe(container.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver.value && container.value) {
    resizeObserver.value.unobserve(container.value);
  }
});
</script>

<template>
  <div ref="container" :class="['sp-c-card-masonry', isJsMasonry && 'is-js-masonry']">
    <div
      v-for="(column, columnIndex) in columns"
      :key="columnIndex"
      class="sp-c-card-masonry__column"
      :data-index="columnIndex"
    >
      <div v-for="itemIndex in column" :key="itemIndex" class="sp-c-card-masonry__item">
        <Card
          :title="items[itemIndex].title"
          :subtitle="items[itemIndex].subtitle"
          :href="items[itemIndex].href"
          :image="items[itemIndex].image"
          :variants="[items[itemIndex].variant]"
        >
          <p v-if="items[itemIndex].excerpt">
            {{ items[itemIndex].excerpt }}
          </p>
        </Card>
      </div>
    </div>
  </div>
</template>

<style src="./styles.css" />
