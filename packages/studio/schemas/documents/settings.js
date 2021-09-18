import { BiCog } from 'react-icons/bi';

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: BiCog,
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Site title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Settings',
    }),
  },
};
