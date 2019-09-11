module.exports = {
  pagePerSection: true,
  sections: [
    {
      sectionDepth: true,
      name: 'UI components',
      components: 'src/components/**/*.js',
    },
    {
      name: 'Markdown',
      sections: [
        {
          name: 'test',
          content: 'docs/test/test.md',
          description: 'The description for the installation section'
        },
      ]
    },
    {
      name: 'CodeSandBox',
      sections: [
        {
          name: 'test',
          content: 'docs/codesandbox/codesandbox.md'
        }
      ]
    }
  ],
};