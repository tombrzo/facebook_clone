import React from 'react';
import '../Style/UserPics.css';
import pic3 from '../images/pic3.jpg';

const UserPics = () => {
  return ( 
    <div className='user__container'>
      
      <img className='user__backgroud-picture' src={pic3} alt=''/>
    
      <div>P</div>
      <div>R</div>
    </div>
  );
};
 
export default UserPics;