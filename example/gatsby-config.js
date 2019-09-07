module.exports = {
  siteMetadata: {
    title: `Document by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://codebushi.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/HuntaroSan`
      },
      {
        name: `github`,
        url: `https://github.com/codebushi`
      },
      {
        name: `youtube`,
        url: `https://www.youtube.com/channel/UCS6lPt9btmTG3GkU82ELygA`
      }
    ],
    sidebarConfig: {
      forcedNavOrder: ['/'],
      ignoreIndex: false
    }
  },
  plugins: [{ resolve: `gatsby-theme-document`, options: {} }]
};
