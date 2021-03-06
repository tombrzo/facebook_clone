import React from 'react';
import Header from '../Layout/Header.js';
import Sidebar from '../Components/Sidebar.js';
import Feed from '../Components/Feed.js';
import Contacts from '../Components/Contacts.js';


const HomePage = () => {
  
  return ( 
    <div className='app'>
      <>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Feed />
          <Contacts />
        </div>
      </>
    </div>
  );
};
 
export default HomePage;