const contentQuery = `{
  allMdx {
    edges {
      node {
        fields {
          title
          slug
        }
        excerpt(pruneLength: 5000)
        frontmatter {
          title
          description
        }
      }
    }
  }
}`;

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: contentQuery,
    transformer: ({ data }) => {
      return flatten(data.allMdx.edges);
    },
    indexName: `Content`,
    settings
  }
];

module.exports = queries;
