import styled from '@emotion/styled';
import React from 'react';

const RightSidebar = () => {
  return (
    <RightSidebarWrapper>
      <RightSidebarNav>
        <RightSidebarTitle>Contents</RightSidebarTitle>
        hello again!
      </RightSidebarNav>
    </RightSidebarWrapper>
  );
};

const RightSidebarWrapper = styled.aside`
  flex: 0 0 16rem;
  font-size: 0.75rem;
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
