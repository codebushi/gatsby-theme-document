import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import mediaqueries from '../styles/media';
import IconButton from './icons/IconButton';
import Menu from './icons/Menu';

const MobileHeader = ({ navOpen, setNavOpen }) => {
  return (
    <StyledMobileHeader navOpen={navOpen}>
      <IconButton
        label="Change Theme Color"
        icon={<Menu />}
        size={30}
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      />
    </StyledMobileHeader>
  );
};

const StyledMobileHeader = styled.div`
  padding: 1rem 1rem 0;
  transition: 0.25s var(--ease-in-out-quad);
  transform: ${p => (p.navOpen ? `translateX(16rem)` : null)};
  ${mediaqueries.desktop_up`
    display: none;
    padding: 1rem 3rem 0;
  `};
`;

MobileHeader.propTypes = {
  navOpen: PropTypes.bool,
  setNavOpen: PropTypes.func
};

export default MobileHeader;
