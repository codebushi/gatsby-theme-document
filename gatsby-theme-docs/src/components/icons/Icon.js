import styled from '@emotion/styled';
import React from 'react';

const Icon = ({ icon, size }) => <StyledIcon size={size}>{icon}</StyledIcon>;

const StyledIcon = styled.span`
  display: inline-block;
  color: #777;
  width: ${p => `${p.size}px`};
  height: ${p => `${p.size}px`};
`;

export default Icon;
