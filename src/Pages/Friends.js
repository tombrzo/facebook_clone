import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header.js';
import '../Style/Friends.css';

const Friends = () => {

  return ( 
    <>
      <Header/>
      <div className='friends'>
        <h4>here will be the content related to the Friends</h4>
      </div>
      <Link className='navLink' to="/">Back </Link>
    </>
  );
};
 
export default Friends;