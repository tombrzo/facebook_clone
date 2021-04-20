import React from 'react';
import {Avatar} from "@material-ui/core";
import '../Style/Story.css';

const Story = ( { image, profileSrc, title}) => {
  return ( 
    <div className='story' style={ {backgroundImage:`URL(${image})`  } } >
      <Avatar className='story__avatar' src={profileSrc}/>
      <h4>{title}</h4>
    </div>
   );
}
 
export default Story;