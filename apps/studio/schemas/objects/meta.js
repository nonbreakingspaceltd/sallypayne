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
      validation: (Rule) => Rule.max(60).warning('Greater than 60 characters'),
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
      validation: (Rule) => Rule.required().max(160).warning('Greater than 160 characters'),
    },
    {
      name: 'blockIndexing',
      title: 'Block indexing',
      description: 'Prevent the current document from being indexed by search engines.',
      type: 'boolean'
    },
  ],
  validation: (Rule) => Rule.required(),
};
