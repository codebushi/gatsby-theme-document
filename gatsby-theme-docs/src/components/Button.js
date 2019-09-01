import styled from '@emotion/styled';
import React from 'react';

const Button = ({ children, onClick }) => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  padding: 0.3rem 0.75rem;
  background: none;
  border: 2px solid #000;
  cursor: pointer;
  font-size: 0.875rem;
  &:hover {
    background: #fff;
  }
`;

export default Button;
