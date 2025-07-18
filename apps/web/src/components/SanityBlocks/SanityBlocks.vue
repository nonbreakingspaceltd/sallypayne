<script lang="ts" setup>
import { h } from 'vue';
import Picture from '../../components/Picture';
import Video from '../../components/Video';
import type { PictureProps } from '../Picture/types';
import type { VideoProps } from '../Video/types';
import type { SanityBlocksProps } from './types';

const props = defineProps<SanityBlocksProps>();

const _components = {
  ...(props.serializers || {}),
  types: {
    picture: ({ value }: { value: PictureProps }) => h(Picture, value),
    video: ({ value }: { value: VideoProps }) => h(Video, value),
    ...(props.serializers?.types || {}),
  },
};
</script>

<template>
  <PortableText :value="blocks" :components="components" />
</template>

