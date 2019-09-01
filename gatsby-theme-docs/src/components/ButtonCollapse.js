import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';

const ButtonCollapse = ({ onClick, isCollapsed }) => {
  return <ButtonCollapseStyled onClick={onClick}>{!isCollapsed ? '-' : '+'}</ButtonCollapseStyled>;
};

const ButtonCollapseStyled = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0.8rem;
  height: 37px;
  background: none;
  border: 0;
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  font-size: 1rem;
`;

ButtonCollapse.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCollapsed: PropTypes.bool
};

export default ButtonCollapse;
