import React from 'react';

const ListItem = ({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} />
    </li>
  );
};

export default ListItem;
