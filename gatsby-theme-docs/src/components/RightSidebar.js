import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import mediaqueries from '../styles/media';
import ListItem from './ListItem';

function createItems(items, location) {
  return (
    items &&
    items.map(item => (
      <li key={location.pathname + item.url} style={{ margin: '0.2rem 0' }}>
        <ListItem location={location} item={item} />
        {item.items && <ul>{createItems(item.items, location)}</ul>}
      </li>
    ))
  );
}

const RightSidebar = ({ tableOfContents, location }) => {
  const contentLinks = createItems(tableOfContents.items, location);

  return (
    <RightSidebarWrapper>
      <RightSidebarNav>
        <RightSidebarTitle>Contents</RightSidebarTitle>
        <RightSidebarList>{contentLinks}</RightSidebarList>
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

const RightSidebarList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

RightSidebar.propTypes = {
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default RightSidebar;
