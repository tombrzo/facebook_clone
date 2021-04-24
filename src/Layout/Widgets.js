import React from 'react';
import '../Style/Widgets.css';

const Widgets = () => {
  return (
    <div className='widgets'>
      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=335&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" height="100%" style={{ border: 'none', overflow: 'hidden' }} scrolling="yes" frameBorder="0"
        title='fb'
        allowtransparency='true'
        allow='encrypted-media'
      >
      </iframe>
    </div>
  );
};

export default Widgets;

