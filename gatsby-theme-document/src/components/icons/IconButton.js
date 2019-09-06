import styled from '@emotion/styled';
import React from 'react';
import Icon from './Icon';

const IconButton = ({ onClick, label, icon, size }) => {
  return (
    <StyledIconButton type="button" onClick={onClick} aria-label={label} title={label}>
      <Icon icon={icon} size={size} />
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  padding: 0;
  background: none;
  border: none;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    color: ${p => p.theme.colors.primary};
  }
`;

export default IconButton;
