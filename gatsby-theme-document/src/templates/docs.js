import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const DocsTemplate = ({ data, location }) => {
  const { mdx } = data;

  return (
    <Layout tableOfContents={mdx.tableOfContents} location={location}>
      <SEO title={mdx.frontmatter.title} description={mdx.frontmatter.description} />
      <Heading>{mdx.frontmatter.title}</Heading>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

const Heading = styled.h1`
  padding-top: 0;
  margin-top: 0;
  &::before {
    display: none !important;
  }
`;

DocsTemplate.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired
};

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      body
      tableOfContents
      frontmatter {
        title
        description
      }
    }
  }
`;

export default DocsTemplate;
