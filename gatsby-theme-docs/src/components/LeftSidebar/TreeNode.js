import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import ButtonCollapse from '../ButtonCollapse';
/**
 * This File was inspired by https://github.com/hasura/gatsby-gitbook-starter
 */

const TreeNode = ({
  className = '',
  setCollapsed,
  collapsed,
  url,
  title,
  items,
  location,
  ...rest
}) => {
  const isCollapsed = collapsed[url];
  const collapse = () => {
    setCollapsed(url);
  };
  const hasChildren = items.length !== 0;
  return (
    <TreeItem>
      {title && (
        <TreeLink to={url} activeClassName="is-active">
          {title}
        </TreeLink>
      )}

      {title && hasChildren ? (
        <ButtonCollapse onClick={collapse} isCollapsed={isCollapsed} />
      ) : null}

      {!isCollapsed && hasChildren ? (
        <TreeSublist>
          {items.map(item => (
            <TreeNode key={item.url} setCollapsed={setCollapsed} collapsed={collapsed} {...item} />
          ))}
        </TreeSublist>
      ) : null}
    </TreeItem>
  );
};

const TreeItem = styled.li`
  position: relative;
  padding: 0;
  margin: 0.2rem 0;
  width: 100%;
  list-style: none;
`;

const TreeSublist = styled.ul`
  padding: 0;
  margin: 0 0 0 1.2rem;
  list-style: none;
  border-left: 1px solid ${p => p.theme.colors.text};
`;

const TreeLink = styled(Link)`
  display: block;
  padding: 0.5rem 1.8rem 0.5rem 1.2rem;
  width: 100%;
  color: ${p => p.theme.colors.text};
  font-weight: 600;
  text-decoration: none;
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.sidebarHover};
  }
  &.is-active {
    color: ${p => p.theme.colors.primary};
  }
`;

export default TreeNode;
