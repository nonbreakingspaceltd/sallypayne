<template>
  <SanityBlocks :blocks="blocks" :serializers="serializers" />
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import Picture from '../../components/Picture';
import Video from '../../components/Video';

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
    serializers: {
      type: Object,
    },
  },
  components: {
    SanityBlocks,
  },
  setup(props) {
    const serializers = {
      types: {
        picture: Picture,
        video: Video,
      },
      ...props.serializers,
    };
    return {
      serializers,
    };
  },
};
</script>
