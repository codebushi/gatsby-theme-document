import React from 'react';

const MobileHeader = ({ navOpen, setNavOpen }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setNavOpen(!navOpen);
        }}
      >
        nav
      </button>
    </div>
  );
};

export default MobileHeader;
