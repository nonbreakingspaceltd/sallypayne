import { format } from 'date-fns';
import { BiPalette } from 'react-icons/bi';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  icon: BiPalette,
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
      title: 'Publish date',
      name: 'publishedDate',
      description: 'Newest items appear first in the work listing.',
      type: 'date',
      initialValue: format(new Date(), 'yyyy-MM-dd'),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      description:
        'Optional client or project logo, shown above the title on the work page.',
      type: 'image',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description: 'Short summary, shown on the work listing page.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Body',
      description: 'Main content, displayed alongside the gallery.',
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
      name: 'gallery',
      title: 'Gallery',
      description:
        'Images shown in the carousel, in order. Drag to rearrange. The first image is also used as the listing thumbnail.',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'slide',
          title: 'Slide',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'imageExtended',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              description:
                'Short name for the piece, also used as the image alt text.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              description: 'Optional detail, e.g. client, medium or year.',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'caption',
              media: 'image.asset',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'galleryBackground',
      title: 'Gallery background',
      description:
        'Background colour behind the gallery images. Defaults to light grey.',
      type: 'string',
      options: {
        list: [
          { title: 'Teal', value: 'sinbad' },
          { title: 'Peach', value: 'manhattan' },
          { title: 'Burnt orange', value: 'reddamask' },
          { title: 'Sage green', value: 'acapulco' },
          { title: 'Olive green', value: 'cucumber' },
          { title: 'Gold', value: 'goldensand' },
          { title: 'Dark gold', value: 'anzac' },
          { title: 'Sky blue', value: 'danube' },
        ],
      },
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
      media: 'gallery.0.image.asset',
    },
  },
});
