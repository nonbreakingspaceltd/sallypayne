import { format } from 'date-fns';
import { BiFile } from 'react-icons/bi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: BiFile,
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
        isUnique: () => true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Publish date',
      name: 'publishedDate',
      type: 'date',
      initialValue: format(new Date(), 'yyyy-MM-dd'),
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
        defineArrayMember({
          type: 'videoYoutube',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'object',
      fields: [
        {
          name: 'main',
          title: 'Main image',
          description:
            'The primary image of the document, utilised for thumbnails etc.',
          type: 'imageExtended',
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: {
            type: 'category',
          },
        }),
      ],
      validation: (Rule) => Rule.unique(),
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
      subtitle: 'publishedDate',
      media: 'media.main',
    },
  },
});
