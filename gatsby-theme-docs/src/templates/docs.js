import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import config from '../../config';
import Layout from '../components/Layout';
import NextPrevious from '../components/NextPrevious';
import SEO from '../components/SEO';

const {
  sidebar: { forcedNavOrder }
} = config;

const DocsTemplate = ({ data, location }) => {
  const { allMdx, mdx } = data;
  const navItems = allMdx.edges
    .map(({ node }) => node.fields.slug)
    .filter(slug => slug !== '/')
    .sort()
    .reduce(
      (acc, cur) => {
        if (forcedNavOrder.find(url => url === cur)) {
          return { ...acc, [cur]: [cur] };
        }

        const prefix = cur.split('/')[1];

        if (prefix && forcedNavOrder.find(url => url === `/${prefix}`)) {
          return { ...acc, [`/${prefix}`]: [...acc[`/${prefix}`], cur] };
        }
        return { ...acc, items: [...acc.items, cur] };
      },
      { items: [] }
    );

  const nav = forcedNavOrder
    .reduce((acc, cur) => {
      return acc.concat(navItems[cur]);
    }, [])
    .concat(navItems.items)
    .map(slug => {
      if (slug) {
        const { node } = allMdx.edges.find(({ node }) => node.fields.slug === slug);
        return { title: node.fields.title, url: node.fields.slug };
      }
      return null;
    });

  return (
    <Layout tableOfContents={mdx.tableOfContents} location={location}>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <h1>{mdx.frontmatter.title}</h1>
      <MDXRenderer>{mdx.body}</MDXRenderer>
      <NextPrevious mdx={mdx} nav={nav} />
    </Layout>
  );
};

DocsTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
    allMdx: PropTypes.object.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        id
        title
        slug
      }
      body
      tableOfContents
      parent {
        ... on File {
          relativePath
        }
      }
      frontmatter {
        title
        description
      }
    }
    allMdx {
      edges {
        node {
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;

export default DocsTemplate;
