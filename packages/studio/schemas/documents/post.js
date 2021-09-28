import { format } from 'date-fns';
import { BiFile } from 'react-icons/bi';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BiFile,
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
        isUnique: () => true,
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
        {
          type: 'imageExtended',
        },
        {
          type: 'videoYoutube',
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        {
          name: 'main',
          title: 'Main image',
          description: 'The primary image of the document, utilised for thumbnails etc.',
          type: 'imageExtended',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedDate',
      media: 'media.main',
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedDateAsc',
      by: [{ field: 'publishedDate', direction: 'asc' }],
    },
  ],
};
