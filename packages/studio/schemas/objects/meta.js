export default {
  name: 'meta',
  title: 'Meta',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      type: 'string',
      title: 'Meta title',
      description: 'Optional, alternative meta title (60 characters maximum).',
      options: {
        source: 'title',
        maxLength: 60,
      },
    },
    {
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Required, short description of the current document (160 characters maximum).',
      options: {
        maxLength: 160,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isNotIndexed',
      title: 'Block indexing',
      description: 'Prevent the current document from being indexed by search engines.',
      type: 'boolean',
    },
  ],
  validation: (Rule) => Rule.required(),
};
