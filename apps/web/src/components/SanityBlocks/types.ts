import type { PortableTextBlock } from '@portabletext/types';
import type { PortableTextComponents } from '@portabletext/vue';

export interface SanityBlocksProps {
  blocks: PortableTextBlock;
  serializers?: PortableTextComponents;
}
