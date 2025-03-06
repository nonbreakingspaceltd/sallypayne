import { BiCog } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: BiCog,
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Settings',
    }),
  },
});
