import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import mediaqueries from '../styles/media';

function createItems(items, location) {
  return (
    items &&
    items.map(item => (
      <li key={location.pathname + item.url}>
        <Link to={location.pathname + item.url}>{item.title}</Link>
        {item.items && <ul>{createItems(item.items, location)}</ul>}
      </li>
    ))
  );
}

const RightSidebar = ({ tableOfContents, location }) => {
  const cool = createItems(tableOfContents.items, location);

  return (
    <RightSidebarWrapper>
      <RightSidebarNav>
        <RightSidebarTitle>Contents</RightSidebarTitle>
        {cool}
      </RightSidebarNav>
    </RightSidebarWrapper>
  );
};

const RightSidebarWrapper = styled.aside`
  display: none;
  flex: 0 0 16rem;
  font-size: 0.75rem;
  ${mediaqueries.desktop_medium_up`
    display: block
  `};
`;

const RightSidebarNav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  width: 16rem;
  height: 100%;
  padding: 2rem 1rem;
`;

const RightSidebarTitle = styled.p`
  margin-top: 0;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default RightSidebar;
