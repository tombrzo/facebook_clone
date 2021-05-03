import React from 'react';
import '../Style/StoryReel.css';
import Story from './Story.js';
import pic9 from '../images/pic9.JPG';

const StoryReel = () => {
  return (
    <div className='storyReel'>
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEiVE3HlMNeptImHa3AIRTQBZ0Oqt6op8Wmg&usqp=CAU'
        profileSrc={pic9}
        title='Tomasz'
      />
      <Story
        image='https://www.insidescience.org/sites/default/files/2020-06/african-savannah_cropped.jpg'
        profileSrc='https://i.pinimg.com/736x/1e/80/e8/1e80e889ef0707b1f3050cb6f910beb4.jpg'
        title='Rafeh Qazi'
      />
      <Story
        image='http://rogersleazermicrozoo.weebly.com/uploads/4/0/3/5/40350859/header_images/1412817101.jpg'
        profileSrc='https://i.pinimg.com/originals/d9/73/bd/d973bd5c32ab69728e727abd4153d19f.jpg'
        title='Frankie'
      />
      <Story
        image='https://assets-natgeotv.fnghub.com/Shows/2605.jpg'
        profileSrc='https://dearkimdotcom.files.wordpress.com/2012/11/indian-lady-2.jpg'
        title='Olivia'
      />
      <Story
        image='https://ocdn.eu/pulscms-transforms/1/PQpk9kpTURBXy84MDk1MWNiZWI5NTc2NGQ0NGE3MjBhN2NjYmRhNzZjOS5qcGeUlQMAzKzNFEDNC2STBc0DFM0BvJUH2TIvcHVsc2Ntcy9NREFfLzIzMzdjOWZkNmI5MzFlZTZjYjBkMjNkY2JhMjU4YTlkLnBuZwDCAJMJpmM0MDY0OAaBoTAB/chile-najwieksze-atrakcje.jpg'
        profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnc5YwJ6VOUZHu-G0Gz__FSXKFtSpCxXqqA&usqp=CAU'
        title='Sonny Sangha'
      />
    </div>
  );
};

export default StoryReel;