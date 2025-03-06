import { BiFileBlank } from 'react-icons/bi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: BiFileBlank,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Introductory content of the current document.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Main content of the current document.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
        defineArrayMember({
          type: 'imageExtended',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        defineField({
          name: 'main',
          title: 'Main image',
          description:
            'The primary image of the document, utilised for thumbnails etc.',
          type: 'imageExtended',
        }),
      ],
    }),
    defineField({
      name: 'meta',
      title: 'Meta',
      type: 'meta',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'media.main.asset',
    },
  },
});
