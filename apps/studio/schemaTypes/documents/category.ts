import { BiPurchaseTag } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

import { isUniqueWithinType } from '../lib/isUniqueWithinType';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiPurchaseTag,
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
        isUnique: isUniqueWithinType,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
