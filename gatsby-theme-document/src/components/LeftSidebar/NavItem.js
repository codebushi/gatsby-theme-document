import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContextProvider';
import ButtonCollapse from '../ButtonCollapse';

const NavItem = ({ items, url = '', title = '' }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const isCollapsed = state.collapsed[url];
  const hasChildren = items && items.length > 0;
  return (
    <StyledNavItem>
      {title !== '' && (
      <NavItemLink to={url} activeClassName="is-active">
        {title}
      </NavItemLink>
      )}
      {hasChildren && title !== '' && (
        <ButtonCollapse
          onClick={() => {
            dispatch({ type: 'TOGGLE_NAV_COLLAPSED', url: url });
          }}
          isCollapsed={isCollapsed}
        />
      )}
      {hasChildren && !isCollapsed && (
        <NavItemChild>
          {items.map(item => (
            <NavItem
              key={item.url}
              {...item}
              />
          ))}
        </NavItemChild>
      )}
    </StyledNavItem>
  );
};

const StyledNavItem = styled.li`
  position: relative;
  display: block;
  padding: 0;
  margin: 0.2rem 0;
  width: 100%;
  list-style: none;
`;

const NavItemLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.8rem 0.5rem 1.2rem;
  width: 100%;
  color: ${p => p.theme.colors.text};
  font-weight: 600;
  text-decoration: none;
  transition: color ${p => p.theme.transition};
  &:hover,
  &:focus,
  &.is-active {
    color: ${p => p.theme.colors.primary};
  }
`;

const NavItemChild = styled.ul`
  margin: 0.5rem 0 0.5rem 1.2rem;
  padding: 0;
  border-left: 1px solid ${p => p.theme.colors.text};
  list-style: none;
  & > li {
    margin: 0;
  }
`;

export default React.memo(NavItem);
