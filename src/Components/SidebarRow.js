import React from 'react';
import '../Style/SidebarRow.css';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({ src, Icon, title }) => {
  return (
    <div className='sidebarRow'>
      { src && <Avatar src={src} style={{backgroundColor:'lightgray'}}/>}
      { Icon && <Icon/>}
      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
