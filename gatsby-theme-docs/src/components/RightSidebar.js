import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import mediaqueries from '../styles/media';
import ListItem from './ListItem';

const RightSidebar = ({ tableOfContents, location }) => {
  const [listItems] = useState(() => {
    const mappedLinks = [];
    function mapLinks(items) {
      items.forEach(item => {
        mappedLinks.push(item);
        if (item.items) {
          mapLinks(item.items);
        }
      });
    }
    mapLinks(tableOfContents.items);
    return mappedLinks;
  });

  return (
    <RightSidebarWrapper>
      <RightSidebarNav>
        <RightSidebarTitle>Contents</RightSidebarTitle>
        <RightSidebarList>
          {listItems.map(item => (
            <RightSidebarListItem key={location.pathname + item.url}>
              <ListItem location={location} item={item} />
            </RightSidebarListItem>
          ))}
        </RightSidebarList>
      </RightSidebarNav>
    </RightSidebarWrapper>
  );
};

const RightSidebarWrapper = styled.aside`
  display: none;
  flex: 0 0 16rem;
  font-size: 0.75rem;
  font-weight: 600;
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

const RightSidebarListItem = styled.li`
  margin: 0.3rem 0;
`;

RightSidebar.propTypes = {
  tableOfContents: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default RightSidebar;
