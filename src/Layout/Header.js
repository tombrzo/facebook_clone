import React from 'react';
import '../Style/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../Components/StateProvider.js';
import StorefrontIcon from '@material-ui/icons/Storefront';
import pic1 from '../images/pic1.png';

function Header() {

  const [{ user }] = useStateValue();

  return <div className='header'>
    <div className='header__left'>
      <img className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Facebook_f_Logo_%28with_gradient%29.svg' alt=''/>

      <div className='header__input'>
        <SearchIcon />
        <input type='text' placeholder='Search Facebook' />
      </div>
    </div>

    <div className='header__center'>
      <div className='header__option header__option_active' aria-label='home' >
        <HomeIcon fontSize='large' />
      </div>
      <div className='header__option' aria-label='Friends' >
        < PeopleOutlineSharpIcon fontSize='large' />
      </div>
      <div className='header__option' aria-label='Watch' >
        < OndemandVideoSharpIcon fontSize='large' />
      </div>
      <div className='header__option' aria-label='Marketplace'>
        < StorefrontIcon fontSize='large' />
      </div>
      <div className='header__option' aria-label='Groups'>
        < SupervisedUserCircleIcon fontSize='large' />
      </div>
    </div>

    <div className='header__right'>
      <div className='header__info'>
        <Avatar src={user.photoURL} />
        <p>{user.displayName}</p>
      </div>
      <div className='header__right_icon' aria-label='Create'>
        <AddIcon />
      </div>
      <div className='header__right_icon' aria-label='Messenger'>
        <img src={pic1} alt='' width='25px' height='25px'/>
      </div>
      <div className='header__right_icon' aria-label='Notifications'>
        <NotificationsActiveIcon />
      </div>
      <div className='header__right_icon' aria-label='Account'>
        <ExpandMoreIcon />
      </div>
    </div>
  </div>;
}

export default Header;
