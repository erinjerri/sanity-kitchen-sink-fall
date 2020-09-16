export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f627f296de4505d7ab82725',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-fall-studio',
                  apiId: 'fc26d2ae-f97c-4fb4-b2b5-bb94268fe339'
                },
                {
                  buildHookId: '5f627f29d683104cb1d96063',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-fall',
                  apiId: 'f1a0a7db-dd47-49ff-aa14-ec2fa7b54edc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-kitchen-sink-fall',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-fall.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
