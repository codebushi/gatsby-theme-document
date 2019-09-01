module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://novela.narative.co`,
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
        extensions: [`.mdx`, `.md`]
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-theme-ui'
  ]
};
