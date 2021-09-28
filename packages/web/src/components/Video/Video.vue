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

<script>
import Picture from '../Picture';
import Button from '../Button';

export default {
  name: 'Video',
  props: {
    videoId: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      default: 'youtube',
    },
    poster: {
      type: Object,
      default: null,
    },
    aspectRatio: {
      type: String,
      default: '16:9',
    },
    labels: {
      type: Object,
      default: () => ({
        play: 'Play video',
      }),
    },
  },
  computed: {
    videoPoster: ({ videoId, poster, service }) => {
      if (poster) {
        if (typeof poster === 'string') {
          return {
            src: poster,
            alt: videoId,
          };
        }
        return poster;
      }
      // fallback images
      if (service === 'youtube') {
        return {
          src: `http://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          alt: videoId,
        };
      }
    },
    videoPath: ({ videoId, service }) => {
      let path = '';
      if (service === 'youtube') {
        path = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1&playsinline`;
      }
      return path;
    },
    videoAllow: ({ service }) => {
      let allow = '';
      if (service === 'youtube') {
        allow = `accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture`;
      }
      return allow;
    },
    videoAspectRatio: ({ aspectRatio }) => {
      const parts = aspectRatio.split(':');
      return `--video-aspect-ratio: ${parts[1]} / ${parts[0]}`;
    },
  },
  components: {
    Picture,
    Button,
  },
};
</script>

<style lang="postcss">
@import '../../assets/styles/settings';
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
