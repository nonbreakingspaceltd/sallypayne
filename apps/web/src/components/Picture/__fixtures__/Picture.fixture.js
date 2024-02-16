export default {
  alt: 'test alt',
  backgroundColor: '#000000',
  caption: 'test caption',
  lqip: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
  loading: 'lazy',
  maintainAspectRatio: true,
  modifiers: ['test-1', 'test-2'],
  size: {
    width: 100,
    height: 100,
  },
  sources: [
    {
      srcset: ['test-image-1.webp 1x', 'test-image-2.webp 2x'],
      media: 'screen and (max-width: 768px)',
    },
    {
      srcset: ['test-image-3.webp 1x', 'test-image-4.webp 2x'],
      media: 'screen and (max-width: 1024px)',
    },
  ],
  src: 'test-image-0.webp',
};
