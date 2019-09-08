import styled from '@emotion/styled';
import React from 'react';
import Logo from '../logo.mdx';

const LogoWrapper = () => (
  <StyledLogoWrapper>
    <Logo />
  </StyledLogoWrapper>
);

const StyledLogoWrapper = styled.div`
  padding: 0 1.2rem;
  & > p {
    margin: 0 0 1.2rem;
    font-size: 1.4rem;
  }
`;

export default LogoWrapper;
