import React from 'react';
import '../Style/UserTop.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import pic3 from '../images/pic3.jpg';
import { useStateValue } from '../Components/StateProvider.js';
import EditIcon from '@material-ui/icons/Edit';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const UserPics = () => {

  const [{ user }] = useStateValue();

  return ( 
    <>
      <div className='user__container'>
        <div className='user__pictures'>
          <img className='user__backgroud-picture' src={pic3} alt=''/>
          <img className='user-avatar' src={user.photoURL} alt='' style={{backgroundColor:'lightgray'}}/>
          <div className='photo-camera'><PhotoCameraIcon fontSize='medium'/></div>
        </div>
        <div className='user__data_top'>
          <div className='user__name'>{user.displayName} </div>
          <div className='user__add-bio'> add a bio </div>
        </div>
        <div className='user__data_bottom'>
          <div className='user__data_bottom-left'>
            <div className='left-subject'>Posts</div>
            <div className='left-subject'>Informations</div>
            <div className='left-subject'>Friends</div>
            <div className='left-subject left-subject-active'>Pictures</div>
            <div className='left-subject'>More<ExpandMoreIcon /></div>
          </div>
          <div className='user__data_bottom-right'>
            <div className='right-subject'><EditIcon style={{color:'#222222'}}/>Edit Profile</div>
            <div className='right-subject' aria-label='display as'><VisibilityIcon style={{color:'#222222'}}/></div>
            <div className='right-subject' aria-label='search in profile'><SearchIcon style={{color:'#222222'}}/></div>
            <div className='right-subject'><MoreHorizIcon style={{color:'#222222'}}/></div>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default UserPics;