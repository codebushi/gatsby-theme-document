import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Styled } from 'theme-ui';
import { globalStyles } from '../styles';
import mediaqueries from '../styles/media';
import LeftSidebar from './LeftSidebar';
import MobileHeader from './MobileHeader';
import RightSidebar from './RightSidebar';

const Layout = ({ children, tableOfContents, location }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <Styled.root>
      <Global styles={globalStyles} />
      <SiteWrapper>
        <LeftSidebar navOpen={navOpen} />
        <SiteContentWrapper>
          <MobileHeader navOpen={navOpen} setNavOpen={setNavOpen} />
          <SiteContent navOpen={navOpen}>{children}</SiteContent>
        </SiteContentWrapper>
        {tableOfContents.items && (
          <RightSidebar tableOfContents={tableOfContents} location={location} />
        )}
      </SiteWrapper>
    </Styled.root>
  );
};

const SiteWrapper = styled.div`
  display: flex;
  background: ${p => p.theme.colors.background};
  transition: background 0.25s var(--ease-in-out-quad);
  min-height: 100vh;
  overflow-x: hidden;
`;

const SiteContentWrapper = styled.main`
  flex-grow: 1;
  min-width: 20rem;
`;

const SiteContent = styled.main`
  padding: 0 1rem 2rem;
  transition: 0.25s var(--ease-in-out-quad);
  opacity: ${p => (p.navOpen ? 0.3 : 1)};
  transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
  ${mediaqueries.desktop_up`
    transform: translateX(0);
    opacity: 1;
    padding: 2rem 3rem 2rem;
    max-width: 50rem;
  `};
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Layout;
