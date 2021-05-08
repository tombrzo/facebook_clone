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
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png' alt='' />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
      </div>
      <Link className='navLink' to="/">Back </Link>
    </>
  );
};
 
export default Friends;