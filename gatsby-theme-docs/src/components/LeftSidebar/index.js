import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import useCycleColor from '../../hooks/useCycleColor';
import Button from '../Button';
import Tree from './Tree';

const LeftSidebar = () => {
  const { cycleColorMode } = useCycleColor();
  const {
    allMdx: { edges }
  } = useStaticQuery(graphql`
    query {
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
  `);
  return (
    <LeftSidebarWrapper>
      <LeftSidebarNav>
        <LeftSidebarList>
          <Tree edges={edges} />
        </LeftSidebarList>
        <p style={{ textAlign: 'center' }}>
          <Button type="button" onClick={cycleColorMode}>
            cycle color
          </Button>
        </p>
      </LeftSidebarNav>
    </LeftSidebarWrapper>
  );
};

const LeftSidebarWrapper = styled.aside`
  flex: 0 0 16rem;
  font-size: 0.875rem;
  background: ${p => p.theme.colors.sidebar};
  transition: background 0.25s var(--ease-in-out-quad);
`;

const LeftSidebarNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 16rem;
  height: 100%;
  padding: 2rem 0;
`;

const LeftSidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  > li > ul {
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

export default LeftSidebar;
