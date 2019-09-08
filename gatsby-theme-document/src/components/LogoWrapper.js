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
  p {
    margin: 0;
    font-size: 1.6rem;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  transition: color ${p => p.theme.transition};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.primary};
  }
`;

export default LogoWrapper;
