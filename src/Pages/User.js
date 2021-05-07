import React from 'react';
import Header from '../Layout/Header.js';
import '../Style/User.css';
import UserPics from './UserPics.js';
import UserActivity from './UserActivity.js';

const User = () => {
  return ( 
    <>
      <Header/>
      <UserPics/>
      <UserActivity/>
    </>
  );
};
 
export default User;
