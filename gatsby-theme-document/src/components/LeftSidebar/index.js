import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import useCycleColor from '../../hooks/useCycleColor';
import mediaqueries from '../../styles/media';
import ColorToggle from '../icons/ColorToggle';
import IconButton from '../icons/IconButton';
import LogoWrapper from '../LogoWrapper';
import Navigation from './Navigation';

const LeftSidebar = ({ navOpen }) => {
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
      <LeftSidebarNav navOpen={navOpen}>
        <LogoWrapper />
        <Navigation edges={edges} />
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <IconButton
            label="Change Theme Color"
            icon={<ColorToggle />}
            size={30}
            onClick={cycleColorMode}
          />
        </p>
      </LeftSidebarNav>
    </LeftSidebarWrapper>
  );
};

const LeftSidebarWrapper = styled.aside`
  margin-left: -16rem;
  flex: 0 0 16rem;
  font-size: 0.875rem;
  ${mediaqueries.desktop_up`
    margin-left: 0;
  `};
`;

const LeftSidebarNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 16rem;
  height: 100%;
  padding: 1rem 0;
  background: ${p => p.theme.colors.sidebar};
  transition: 0.25s var(--ease-in-out-quad);
  transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
  ${mediaqueries.desktop_up`
    transform: translateX(0);
    padding: 3rem 0;
  `};
`;

LeftSidebar.propTypes = {
  navOpen: PropTypes.bool
};

export default React.memo(LeftSidebar);
