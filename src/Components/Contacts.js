import React from 'react';
import '../Style/Contacts.css';
import ContactRow from './ContactRow.js';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import faker from 'faker';

const Contacts = () => {
  return (
    <>
      <div className='contacts'>
        <div className='contacts__title'>
          <h4 className='title__name'>Contacts</h4>
          <div className='title__icons'>
            <span className='title__icon room' aria-label='New room'><VideoCallIcon fontSize='small' /></span>
            <span className='title__icon search' aria-label='Search for a person or group'><SearchIcon  fontSize='small' /></span>
            <span className='title__icon options' aria-label='Options'><MoreHorizIcon  fontSize='small'/></span>
          </div>
        </div>

        {Array(20).fill(1).map( (x) =>{
          return (
            <ContactRow src={ faker.image.avatar() } firstName={faker.name.firstName()} lastName={faker.name.lastName()} />
          );
        })}
        
        <div className='separator'></div>
        <div className='groupsConversations'>
          <h4 className='conversation__name'>Groups Conversations</h4>
          <div className='create__group'>
            <div className='create__add'>+</div>
            <p>Create a group</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;

