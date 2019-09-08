import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import Logo from '../logo.mdx';

const LogoWrapper = () => (
  <StyledLogoWrapper>
    <LogoLink to="/">
      <Logo />
    </LogoLink>
  </StyledLogoWrapper>
);

const StyledLogoWrapper = styled.div`
  padding: 0 1.2rem;
  p {
    margin: 0 0 1.2rem;
    font-size: 1.4rem;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
`;

export default LogoWrapper;
