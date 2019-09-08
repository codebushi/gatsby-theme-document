import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { GlobalDispatchContext, GlobalStateContext } from '../../context/GlobalContextProvider';
import ButtonCollapse from '../ButtonCollapse';

const NavItem = ({ item }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const isCollapsed = state.collapsed[item.url];
  const hasChildren = item.items && item.items.length > 0;
  return (
    <StyledNavItem>
      <NavItemLink to={item.url} activeClassName="is-active">
        {item.title}
      </NavItemLink>
      {hasChildren && (
        <ButtonCollapse
          onClick={() => {
            dispatch({ type: 'TOGGLE_NAV_COLLAPSED', url: item.url });
          }}
          isCollapsed={isCollapsed}
        />
      )}
      {hasChildren && !isCollapsed && (
        <NavItemChild>
          {item.items.map(child => (
            <StyledNavItem key={child.url}>
              <NavItemLink to={child.url} activeClassName="is-active">
                {child.title}
              </NavItemLink>
            </StyledNavItem>
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
