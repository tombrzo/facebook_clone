import React from 'react';
import '../Style/Sidebar.css';
import SidebarRow from '../Components/SidebarRow'; 
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
      <div className='separator'></div>
      <div className='shortcuts'>
        <h4 className='shortcust__title'>Your shortcuts</h4>
        <div className='shortcuts__content'>
          <img className='shortcuts__content_image' src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-0/p180x540/90505622_3215482428484729_7262147926342762496_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=825194&_nc_ohc=zkHzZMQqcyMAX-q3DYT&_nc_ht=scontent-waw1-1.xx&tp=6&oh=568c0251704c54df38af57369bd1c279&oe=60BC8BDA' alt=''/>
          <p>Create a group</p>
        </div>
      </div>
      <div className='rules'>
        <p className='rules_type'>Privacy<span className='rules_dot'> . </span>Regulations<span className='rules_dot'> . </span>
        Advertisement<span className='rules_dot'> . </span>Ad options<span className='rules_dot'> . </span>
        Cookies<span className='rules_dot'> . </span>More<span className='rules_dot'> . </span>Facebook &copy; 2021</p>
      </div>


    </div>
  );
};

export default Sidebar;