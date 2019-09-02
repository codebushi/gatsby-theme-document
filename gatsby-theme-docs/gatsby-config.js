module.exports = {
  siteMetadata: {
    title: `Docs by Code Bushi`,
    name: `Code Bushi`,
    siteUrl: `https://codebushi.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`
      },
      {
        name: `github`,
        url: `https://github.com/narative`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `content`,
        name: `content`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false
            }
          },
          `gatsby-remark-embed-video`
        ]
      }
    },
    `gatsby-plugin-sharp`,
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui'
  ]
};
