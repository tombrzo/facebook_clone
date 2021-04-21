import React, { useState } from 'react';
import '../Style/MessageSender.css';
import { Avatar } from "@material-ui/core";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {

  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    setImageUrl('');
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImageUrl(e.target.value);
  };

  return (
    <div className='messageSender'>
      <div className='messageSender__top'>
        <Avatar />
        <form>
          <input value={input} onChange={handleChangeText} className='messageSender__input' placeholder={`what"s on your mind?`} />
          <input value={imageUrl} onChange={handleChangeImage} placeholder='image URL (Optional)' />
          <button onClick={handleSubmit} type='submit'>Hidden submit</button>
        </form>
      </div>

      <div className='messageSender__bottom'>
        <div className='messageSender__option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h4>Live Video</h4>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h4>Photo/Video</h4>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h4>Feeling/Activity</h4>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;