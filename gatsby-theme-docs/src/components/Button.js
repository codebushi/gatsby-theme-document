import styled from '@emotion/styled';
import React from 'react';

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  padding: 0.5rem 0.7rem;
  background: none;
  border: 2px solid ${p => p.theme.colors.text};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    border-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.primary};
  }
`;

export default Button;
