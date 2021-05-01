import React from 'react';
import '../Style/Sidebar.css';
import SidebarRow from '../Components/SidebarRow';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
// import PeopleIcon from '@material-ui/icons/People';
// import ChatIcon from '@material-ui/icons/Chat';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from '../Components/StateProvider';

const Sidebar = () => {

  const [{ user }] = useStateValue();

  return (
    <div className='sidebar'>
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/5rR6LRpNc5u.png' title='Covid-19 -Information Center' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png' title='Find friends' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/w-vdKCGzCy1.png' title='Newest' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/mAnT0r8GSOm.png' title='Favorite' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png' title='Groups' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png' title='Marketplace' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png' title='Watch' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/8wTx0Eu2vRq.png' title='Events' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/VPndBxotRgH.png' title='Memories' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/GJ4EaivDaSj.png' title='Facebook Pay' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/PObY9OA5lvJ.png' title='Games' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/MN5ZSGIfEZ3.png' title='Friends lists' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/y_/r/NYOGcd-z-qs.png' title='Offers' />
      <SidebarRow src='https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/3jfPQhTRYG8.png' title='Oculus' />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title='See more' />
    </div>
  );
};

export default Sidebar;