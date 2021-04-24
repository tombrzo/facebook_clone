import React from 'react';
import '../Style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../Components/StateProvider.js';


function Header() {

  const [{ user }] = useStateValue();

  return <div className='header'>
    <div className='header__left'>
      <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Facebook_circle_pictogram.svg/120px-Facebook_circle_pictogram.svg.png' alt='' />

      <div className='header__input'>
        <SearchIcon />
        <input type='text' placeholder='Search Facebook' />
      </div>
    </div>

    <div className='header__center'>
      <div className='header__option header__option_active' >
        <HomeIcon fontSize='large' />
      </div>
      <div className='header__option'>
        < FlagIcon fontSize='large' />
      </div>
      <div className='header__option'>
        < SubscriptionsOutlinedIcon fontSize='large' />
      </div>
      <div className='header__option'>
        < StoreOutlinedIcon fontSize='large' />
      </div>
      <div className='header__option'>
        < SupervisedUserCircleIcon fontSize='large' />
      </div>
    </div>

    <div className='header__right'>
      <div className='header__info'>
        <Avatar src={user.photoURL} />
        <h4>{user.displayName}</h4>
      </div>

      <IconButton >
        <AddIcon />
      </IconButton>

      <IconButton>
        <ForumIcon />
      </IconButton>

      <IconButton>
        <NotificationsActiveIcon />
      </IconButton>
      <IconButton>
        <ExpandMoreIcon />
      </IconButton>
    </div>

  </div>;
}

export default Header;


