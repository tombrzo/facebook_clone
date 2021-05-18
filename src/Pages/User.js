import React from 'react';
import Header from '../Layout/Header.js';
import UserTop from './UserTop.js';
import UserActivity from './UserActivity.js';

const User = () => {
  return ( 
    <>
      <Header/>
      <UserTop/>
      <UserActivity/>
    </>
  );
};

export default User;
