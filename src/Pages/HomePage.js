import React from 'react';
import Header from '../Layout/Header.js';
import Sidebar from '../Layout/Sidebar.js';
import Feed from '../Layout/Feed.js';
import Widgets from '../Layout/Widgets.js';


const HomePage = () => {
  
  return ( 
    <div className='app'>
      <>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </>
    </div>
  );
};
 
export default HomePage;