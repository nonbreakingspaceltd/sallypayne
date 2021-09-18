import { BiFileBlank } from "react-icons/bi";

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: BiFileBlank,
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
          type: 'image',
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
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'media.main.asset',
    },
  },
};
