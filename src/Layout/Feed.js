import React from 'react';
import '../Style/Feed.css';
import StoryReel from '../Components/StoryReel.js';
import MessageSender from '../Components/MessageSender.js';

const Feed = () => {
  return (
    <div className='feed'>

      <StoryReel />
      <MessageSender />

    </div>
  );
}

export default Feed;