import React from 'react';
import '../Style/ContactRow.css';
import { Avatar } from '@material-ui/core';

const ContactRow = ({ src, Icon, firstName, lastName }) => {
  return (
    <div className='contactRow'>
      { src && <Avatar src={src} style={{backgroundColor:'lightgray'}}/>}
      { Icon && <Icon/>}
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default ContactRow;