import React from 'react';
import '../Style/UserActivity.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const UserActivity = () => {
  return ( 
    <div className='userActivity__wraper'>
      <div className='userActivity__element'>
        <div className='title'>
          <div className='title__header'>
            <h3 className='title__header_content'>Pictures</h3>
          </div>
          <p className='title__sentense'>Add pictures/film</p>
          <div className='title__dots-icon'><MoreHorizIcon style={{color:'#222222'}}/></div>
        </div>
        <div className='subtitle'>
          <p className='subtitle__sentense'>The photos you are in</p>
          <p className='subtitle__sentense'>Your photos</p>
          <p className='subtitle__sentense subtitle__active'>Albums</p>

        </div>
        <div className='content'>m</div>

      </div>



      <div className='userActivity__element'></div>
      <div className='userActivity__element'></div>
      <div className='userActivity__element'></div>
      <div className='userActivity__element'></div>
      <div className='userActivity__element'></div>
      
    </div>
  );
};
 
export default UserActivity;