import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'meta',
  title: 'Meta',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Meta title',
      description: 'Optional, alternative meta title (60 characters maximum).',
      validation: (Rule) => Rule.max(60).warning('Greater than 60 characters'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description:
        'Required, short description of the current document (160 characters maximum).',
      validation: (Rule) =>
        Rule.required().max(160).warning('Greater than 160 characters'),
    }),
    defineField({
      name: 'blockIndexing',
      title: 'Block indexing',
      description:
        'Prevent the current document from being indexed by search engines.',
      type: 'boolean',
    }),
  ],
  validation: (Rule) => Rule.required(),
});
