import { defineType } from 'sanity';

export default defineType({
  title: 'Image',
  name: 'imageExtended',
  type: 'image',
  options: {
    hotspot: true,
  },
  validation: (Rule) => Rule.required(),
});
