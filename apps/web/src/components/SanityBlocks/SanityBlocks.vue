<script lang="ts" setup>
import type { PortableTextComponents } from '@portabletext/vue';
import { PortableText } from '@portabletext/vue';
import { computed, h } from 'vue';
import Picture from '../../components/Picture';
import Video from '../../components/Video';
import type { SanityBlocksProps } from './types';

const props = defineProps<SanityBlocksProps>();

// Ensure blocks is valid
const blocks = computed(() => {
  if (!props.blocks) {
    return [];
  }
  return props.blocks;
});

const components: PortableTextComponents = {
  ...(props.serializers || {}),
  types: {
    picture: ({ value }) => h(Picture, value),
    video: ({ value }) => h(Video, value),
    ...(props.serializers?.types || {}),
  },
};
</script>

<template>
  <PortableText v-if="blocks" :value="blocks" :components="components" />
</template>

