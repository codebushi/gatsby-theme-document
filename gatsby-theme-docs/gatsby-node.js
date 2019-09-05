const path = require('path');
const startCase = require('lodash/startCase');

// Make sure the content directory exists
// exports.onPreBootstrap = ({ reporter }) => {
//   const contentPath = `content`;
//   if (!fs.existsSync(contentPath)) {
//     reporter.info(`creating the ${contentPath} directory`);
//     fs.mkdirSync(contentPath);
//   }
// };

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
      component: path.resolve('./src/templates/docs.js'),
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

// For some reason, getting https://github.com/webpack-contrib/css-loader/issues/447
// When trying to use dotenv in gatsby-config. Adding this fixes it.
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
};
