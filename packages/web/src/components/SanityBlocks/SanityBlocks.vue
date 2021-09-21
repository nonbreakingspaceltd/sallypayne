<template>
  <SanityBlocks :blocks="blocks" :serializers="serializers" />
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component';
import Picture from '../../components/Picture';

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
    serializers: {
      type: Object,
      required: true,
    }
  },
  components: {
    SanityBlocks,
  },
  setup(props) {
    const serializers = {
      types: {
        picture: Picture,
      },
      ...props.serializers
    };
    return {
      serializers,
    };
  },
};
</script>
