import { FaYoutube } from 'react-icons/fa';

export default {
  name: 'videoYoutube',
  title: 'Youtube video',
  type: 'object',
  icon: FaYoutube,
  fields: [
    {
      name: 'code',
      title: 'Youtube ID',
      description: `In the example youtube.com/watch?v=9zbEJXxGNrs or https://www.youtube.com/embed/9zbEJXxGNrs, the ID is 9zbEJXxGNrs.`,
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      code: 'code',
    },
    prepare: ({ code }) => {
      return {
        title: `Youtube ID: ${code}`,
      };
    },
  },
};
