import React from 'react';
import '../Style/UserActivity.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import canary3 from '../images/canary3.jpg';
import morocco from '../images/morocco.jpg';
import slovakia from '../images/slovakia.jpg';
import portugal from '../images/portugal.jpg';
import romania from '../images/romania.jpg';
import london from '../images/london.jpg';
import alps from '../images/alps.jpg';

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
        <div className='content'>
          <div className='content__pictures'>
            <div className='content__pictures_photo'><AddSharpIcon style={{fontSize:'40px'}}/></div>
            <div className='content__pictures_title'><p>Create album</p>
              <div className='content__pictures_subtitle subtitle_hide'>hide subtitle</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={canary3} alt=''/>
            <div className='content__pictures_title'><p>Canary Islands</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={morocco} alt=''/>
            <div className='content__pictures_title'><p>Morocco</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={alps} alt=''/>
            <div className='content__pictures_title'><p>Morocco</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={london} alt=''/>
            <div className='content__pictures_title'><p>Morocco</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>


          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={slovakia} alt=''/>
            <div className='content__pictures_title'><p>HEllo</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={portugal} alt=''/>
            <div className='content__pictures_title'><p>HEllo</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={romania} alt=''/>
            <div className='content__pictures_title'><p>HEllo</p>
              <div className='content__pictures_subtitle'>23 elements</div>
            </div>
          </div>

        </div>

      </div>



      <div className='userActivity__element'>

        <div className='title'>
          <div className='title__header'>
            <h3 className='title__header_content'>Sport</h3>
          </div>
          <div className='title__dots-icon'><MoreHorizIcon style={{color:'#222222'}}/></div>
        </div>
        <div className='subtitle'>
          <p className='subtitle__sentense subtitle__active'>Sports teams</p>
          <p className='subtitle__sentense'>Sportsmans</p>
        </div>


      </div>

      
      <div className='userActivity__element'>
        <div className='title'>
          <div className='title__header'>
            <h3 className='title__header_content'>Check-in</h3>
          </div>
          <div className='title__dots-icon'><MoreHorizIcon style={{color:'#222222'}}/></div>
        </div>
        <div className='subtitle'>
          <p className='subtitle__sentense subtitle__active'>Recently</p>
        </div>
        <div className='check-in__event'>
          <img className='check-in__pics' alt="" src="https://mediateka.ckzamek.pl/wp-content/uploads/2020/10/2013-EthnoPort1024_1.jpg"/>
          <div className='check-in__event_title'>
            <h4>Ethno Port Poznan Festival 2013</h4>
            <p>Visited on 9th Jun 2013</p>
          </div>
        </div>
      </div>


      <div className='userActivity__element'></div>
      <div className='userActivity__element'></div>
      <div className='userActivity__element'></div>
      
    </div>
  );
};
 
export default UserActivity;

