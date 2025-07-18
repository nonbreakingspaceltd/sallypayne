<script lang="ts" setup>
import { computed } from 'vue';
import type { VideoProps } from './types';

const props = defineProps<VideoProps>();

const _videoPath = computed(() => {
  let path = '';
  if (props.service === 'youtube') {
    path = `https://www.youtube.com/embed/${props.videoId}?rel=0&modestbranding=1&autoplay=1&playsinline`;
  }
  return path;
});

const _videoAllow = computed(() => {
  let allow = '';
  if (props.service === 'youtube') {
    allow = `accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`;
  }
  return allow;
});

const _videoAspectRatio = computed(() => {
  const parts = props.aspectRatio?.split(':') ?? ['9', '16'];
  return `--video-aspect-ratio: ${parts[1]} / ${parts[0]}`;
});
</script>

<template>
  <div class="sp-c-video" :style="videoAspectRatio">
    <iframe
      :id="`video-${videoId}`"
      :src="videoPath"
      frameborder="0"
      :allow="videoAllow"
      allowfullscreen
      class="sp-c-video__player"
      loading="lazy"
    />
  </div>
</template>

<style lang="pcss">
@import '../../assets/styles/tools';

.sp-c-video {
  width: 100%;
  position: relative;
  padding-bottom: calc(var(--video-aspect-ratio, 9 / 16) * 100%);
  height: 0;
  background-color: var(--color-black);
}

.sp-c-video__player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
