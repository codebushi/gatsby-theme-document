const startCase = require('lodash/startCase');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                id
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panic('error loading content', result.errors);
    return;
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug ? node.fields.slug : '/',
      component: require.resolve('./src/templates/docs'),
      context: {
        id: node.fields.id
      }
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    let value = parent.relativePath.replace(parent.ext, '');

    if (value === 'index') {
      value = '';
    }

    createNodeField({
      name: `slug`,
      node,
      value: `/${value}`
    });

    createNodeField({
      name: 'id',
      node,
      value: node.id
    });

    createNodeField({
      name: 'title',
      node,
      value: node.frontmatter.title || startCase(parent.name)
    });
  }
};
