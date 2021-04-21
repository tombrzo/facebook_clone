import React from 'react';
import '../Style/Feed.css';
import StoryReel from '../Components/StoryReel.js';
import MessageSender from '../Components/MessageSender.js';
import Post from '../Components/Post.js';

const Feed = () => {
  return (
    <div className='feed'>

      <StoryReel />
      <MessageSender />
      <Post
        profilePic='https://i.pinimg.com/564x/71/c3/e0/71c3e018e732a5b4d6fb632e818eb991.jpg'
        message='Woow this works'
        timestamp={new Date().toLocaleString()}
        username='TomBrzo'
        image='https://as1.ftcdn.net/jpg/02/42/22/92/500_F_242229229_kRvtxPBja2CpSDc3KTw3whnaTF8MGMcq.jpg'
      />
      <Post
        profilePic='https://i.pinimg.com/236x/80/01/d2/8001d20dabe62238df07bf0be8db74f7.jpg'
        message='Hello Mandingo!'
        timestamp={new Date().toLocaleString()}
        username='John Porter'
        image='https://code.org/shared/images/social-media/codeorg2020_social.png'
      />
      <Post
        profilePic='https://i.pinimg.com/564x/5d/fd/2f/5dfd2fc4dc216267e20d4aeecb2bb81f.jpg'
        message='Woow it is Friday now'
        timestamp={new Date().toLocaleString()}
        username='Chris'
        image='https://uknanny.org/wp-content/uploads/2020/04/Funbrain-Logo-300x300.jpg'
      />
    </div>
  );
};

export default Feed;