export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Deploy',
        sites: [
          {
            title: 'Sally Payne Website',
            apiId: '012cbb34-aa49-495c-8b38-5c32000aeeaf',
            buildHookId: '61f28de302b137b91278f890',
            name: 'sallypayne',
            url: 'https://www.sallypayne.com',
          },
        ],
      },
      layout: {
        width: 'small',
        height: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'small',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'New',
        order: '_createdAt desc',
        types: ['post'],
      },
      layout: {
        width: 'small',
        height: 'small'
      }
    },
  ],
};
