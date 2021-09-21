export const blocksToPlainText = (blocks) => {
  if (!blocks || blocks.length == 0) return '';
  if (typeof blocks === 'string' || blocks instanceof String) {
    return blocks;
  }
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return block.text;
      }
      return block.children.map((child) => child.text).join(' ');
    })
    .join(' ');
};
