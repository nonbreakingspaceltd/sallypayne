<template>
  <PortableText :value="blocks" :components="components" />
</template>

<script>
import { PortableText } from '@portabletext/vue';
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
    PortableText,
  },
  setup(props) {
    const components = {
      types: {
        picture: Picture,
        video: Video,
      },
      ...props.serializers,
    };
    return {
      components,
    };
  },
};
</script>
