import React from 'react';
import '../Style/ContactRow.css';
import { Avatar } from '@material-ui/core';

const ContactRow = ({ src, Icon, firstName, lastName }) => {
  return (
    <div className='contact__row'>
      { src && <Avatar src={src} />}
      { Icon && <Icon/>}
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default ContactRow;