
import { BiPurchaseTag } from "react-icons/bi";

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon: BiPurchaseTag,
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
  ],
};
