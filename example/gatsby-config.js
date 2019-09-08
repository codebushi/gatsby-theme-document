module.exports = {
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://codebushi.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `github`,
        url: `https://github.com/codebushi`
      },
      {
        name: `twitter`,
        url: `https://twitter.com/HuntaroSan`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ['/introduction', '/codeblock'],
      ignoreIndex: true
    }
  },
  plugins: [{ resolve: `gatsby-theme-document`, options: {} }]
};
