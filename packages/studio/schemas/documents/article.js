import { format } from 'date-fns';

export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: ({ title }) => title,
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Publish date',
      name: 'publishedDate',
      type: 'date',
      initialValue: format(new Date(), 'yyyy-MM-dd'),
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Introductory content of the current document.',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body',
      description: 'Main content of the current document.',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'object',
      fields: [
        {
          name: 'main',
          title: 'Main image',
          description: 'The primary image of the document, utilised for thumbnails etc.',
          type: 'image',
        },
      ],
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta',
    },
  ],
};
