const project = {
    name: 'project',
    title: 'Projects',
    description: 'A list of my projects',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string',
          },
        ],
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }],
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {
            type: 'block',
            styles: [
              { title: 'Normal', value: 'p' },
              { title: 'Heading 1', value: 'h1' },
              { title: 'Heading 2', value: 'h2' },
              { title: 'Heading 3', value: 'h3' },
              { title: 'Heading 4', value: 'h4' },
              { title: 'Heading 5', value: 'h5' },
              { title: 'Heading 6', value: 'h6' },
            ],
            lists: [
              { title: 'Numbered', value: 'numbered' },
              { title: 'Bulleted', value: 'bulleted' },
            ],
            marks: {
              decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Code', value: 'code' },
                { title: 'Underline', value: 'underline' },
              ],

            },
          },
          { type: 'image' },
        ],
      },
    ],
  };
  
  export default project;