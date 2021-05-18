import React from 'react';
import Header from '../Layout/Header.js';
import '../Style/Marketplace.css';

const Marketplace = () => {
  
  return (  
    <>
      <Header/>
      <div className='marketplace'>
        <h4>here will be the content related to the Marketplace</h4>
      </div>
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png' alt='' />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
      </div>
    </>
  );
};
 
export default Marketplace;