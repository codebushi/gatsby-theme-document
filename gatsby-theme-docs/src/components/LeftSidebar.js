import styled from '@emotion/styled';
import React from 'react';
import useCycleColor from '../hooks/useCycleColor';

const LeftSidebar = () => {
  const { cycleColorMode } = useCycleColor();
  return (
    <LeftSidebarWrapper>
      <LeftSidebarNav>
        hello
        <p>
          <button type="button" onClick={cycleColorMode}>
            cycle color
          </button>
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
  padding: 2rem 1rem;
`;

export default LeftSidebar;
