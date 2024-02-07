// schemas/posts.js

export default {
  name: 'posts',
  type: 'document',
  title: 'Posts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'previewimage',
      type: 'image',
      title: 'PreviewImage',
    },
    {
      name: 'notes',
      type: 'string',
      title: 'Notes',
      description: 'Notes on project',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
  ],
}
