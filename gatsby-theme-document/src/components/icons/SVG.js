import styled from '@emotion/styled';
import React from 'react';

const SVG = ({ children, viewBox }) => (
  <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
    {children}
  </StyledSVG>
);

const StyledSVG = styled.svg`
  fill: ${p => p.theme.colors.text};
  transition: all ${p => p.theme.transition};
  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.primary};
  }
`;

export default SVG;
