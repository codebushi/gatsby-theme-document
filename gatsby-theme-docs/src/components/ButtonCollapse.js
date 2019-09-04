import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Add from './icons/Add';
import Icon from './icons/Icon';
import Minimize from './icons/Minimize';

const ButtonCollapse = ({ onClick, isCollapsed }) => {
  return (
    <StyledButtonCollapse
      onClick={onClick}
      aria-label="Toggle Subnavigation"
      title="Toggle Subnavigation"
    >
      {isCollapsed ? <Icon icon={<Add />} size={24} /> : <Icon icon={<Minimize />} size={24} />}
    </StyledButtonCollapse>
  );
};

const StyledButtonCollapse = styled.button`
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
