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

<script>
import { nextTick, onBeforeUnmount, onMounted, ref, toRefs } from 'vue';
import Card from '../Card';

export default {
  components: {
    Card,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const resizeObserver = ref();
    const { items } = toRefs(props);
    const columns = ref([]);
    const container = ref();
    const isJsMasonry = ref(false);

    function columnCount() {
      const containerStyles = getComputedStyle(container.value);

      // create dummy element
      const columnElement = document.createElement('div');
      columnElement.classList.add('sp-c-card-masonry__column');
      container.value.appendChild(columnElement);
      const columnStyles = getComputedStyle(columnElement);

      const gap = parseInt(containerStyles.getPropertyValue('gap'));
      const columnWidth = parseInt(columnStyles.getPropertyValue('min-width'));
      const containerWidth = parseInt(container.value.getBoundingClientRect().width);

      // remove dummy element
      container.value.removeChild(columnElement);

      const count = columnWidth ? Math.floor((containerWidth + gap) / (columnWidth + gap)) : 1;

      return count > 0 ? count : 1;
    }

    function createColumns(count) {
      return [...new Array(count)].map(() => []);
    }

    function fillColumns(itemIndex) {
      if (itemIndex >= items.value.length) {
        return;
      }
      nextTick(() => {
        const columnElements = [...container.value.children];
        const target = columnElements.reduce((prev, curr) =>
          curr.getBoundingClientRect().height < prev.getBoundingClientRect().height ? curr : prev
        );
        columns.value[target.dataset.index].push(itemIndex);
        fillColumns(itemIndex + 1);
      });
    }

    function redraw(force = false) {
      if (columns.value.length === columnCount() && !force) {
        return;
      }
      columns.value = createColumns(columnCount());
      fillColumns(0);
    }

    columns.value = [items.value.map((_item, index) => index)];

    onMounted(() => {
      const supportsGridMasonry = window.CSS.supports('grid-template-rows', 'masonry');
      if (!supportsGridMasonry) {
        isJsMasonry.value = true;
        resizeObserver.value = new ResizeObserver(() => redraw());
        columnCount();
        redraw();
        resizeObserver.value.observe(container.value);
      }
    });

    onBeforeUnmount(() => {
      if (resizeObserver.value) {
        resizeObserver.value.unobserve(container.value);
      }
    });

    return {
      items,
      columns,
      container,
      isJsMasonry,
    };
  },
};
</script>

<style lang="postcss" src="./CardMasonry.css"></style>
