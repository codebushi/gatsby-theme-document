import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

const DocsTemplate = ({ data: { mdx } }) => {
  return (
    <Layout>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

DocsTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired
  }).isRequired
};

export const pageQuery = graphql`
  query DocumentQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;

export default DocsTemplate;
