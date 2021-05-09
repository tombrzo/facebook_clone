import React from 'react';
import '../Style/UserActivity.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
              <div className='content__pictures_subtitle'>14 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={alps} alt=''/>
            <div className='content__pictures_title'><p>Alps</p>
              <div className='content__pictures_subtitle'>17 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={london} alt=''/>
            <div className='content__pictures_title'><p>London</p>
              <div className='content__pictures_subtitle'>11 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={slovakia} alt=''/>
            <div className='content__pictures_title'><p>Slovakia</p>
              <div className='content__pictures_subtitle'>22 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={portugal} alt=''/>
            <div className='content__pictures_title'><p>Portugal</p>
              <div className='content__pictures_subtitle'>18 elements</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src={romania} alt=''/>
            <div className='content__pictures_title'><p>Romania</p>
              <div className='content__pictures_subtitle'>16 elements</div>
            </div>
          </div>
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
            <h3 className='title__header_content'>Films</h3>
          </div>
          <div className='title__dots-icon'><MoreHorizIcon style={{color:'#222222'}}/></div>
        </div>
        <div className='subtitle'>
          <p className='subtitle__sentense subtitle__active'>Watched</p>
          <p className='subtitle__sentense'>Films</p>
        </div>
        <div className='films__event'> 
          <div className='films__event_title'>
            <h3>No collection 'Watched' to display</h3>
          </div>
        </div>
      </div>

      <div className='userActivity__element'>
        <div className='title'>
          <div className='title__header'>
            <h3 className='title__header_content'>Books</h3>
          </div>
          <div className='title__dots-icon'><MoreHorizIcon style={{color:'#222222'}}/></div>
        </div>
        <div className='subtitle'>
          <p className='subtitle__sentense subtitle__active'>Read</p>
          <p className='subtitle__sentense'>Books</p>
        </div>
        <div className='books__event'> 
          <div className='books__event_title'>
            <h3>No collection 'Read' to display</h3>
          </div>
        </div>
      </div>
      
      <div className='userActivity__element'>
        <div className='title'>
          <div className='title__header'>
            <h3 className='title__header_content'>Likes</h3>
          </div>
          <div className='title__dots-icon'><MoreHorizIcon style={{color:'#222222'}}/></div>
        </div>
        <div className='subtitle'>
          <p className='subtitle__sentense subtitle__active'>All Likes</p>
          <p className='subtitle__sentense'>Films</p>
          <p className='subtitle__sentense'>TV Programs</p>
          <p className='subtitle__sentense'>Artists</p>
          <p className='subtitle__sentense'>Books</p>
          <p className='subtitle__sentense'>More <ExpandMoreIcon/> </p>
        </div>
        <div className='content'>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://www.dalailama.com/assets/news-thumbnails/_thumbnailMedium/2020-10-10-Dharamsala-N00_SA971451.jpg' alt=''/>
            <div className='content__pictures_title'><p>Dalai Lama</p>
              <div className='content__pictures_subtitle'>Osoba publiczna</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjzSVX62AXzajZgKL0qiZilStV5eAtdYvOM-ag1pTDgnwERCZ48jWvFVqKlExVL5B9qM&usqp=CAU' alt=''/>
            <div className='content__pictures_title'><p>Natemat.pl</p>
              <div className='content__pictures_subtitle'>Witryna publiczna</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-0/p180x540/83945749_10158351060583641_8439830780699475968_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=340051&_nc_ohc=W0ZphqJqz2gAX9SMC86&_nc_ht=scontent-waw1-1.xx&tp=6&oh=5f1b0ace324e2488d78b29181b0e208f&oe=60BD6173' alt=''/>
            <div className='content__pictures_title'><p>Sting</p>
              <div className='content__pictures_subtitle'>Musician</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-0/s600x600/180290195_10158429716053026_29199354452428995_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=730e14&_nc_ohc=opFd-xpaKHUAX_xfWpY&_nc_ht=scontent-waw1-1.xx&tp=7&oh=7b08bd154bc4b3fcb395efd28a8c05b4&oe=60BF99BB' alt=''/>
            <div className='content__pictures_title'><p>Ethno Port</p>
              <div className='content__pictures_subtitle'>Festival</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/1535578_845382492145804_6151188438635558099_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3GUEwOAhESsAX9At4Lv&_nc_oc=AQnS3NVrO-dI7ub3X-InT5JWtLSr91icqoUS57-SBu77m5HpTS-hytuM-GgYcT3Fqn4&_nc_ht=scontent-waw1-1.xx&oh=90e61112a7898d76bf54f22c2e4d581b&oe=60BD7B7B' alt=''/>
            <div className='content__pictures_title'><p>At Art</p>
              <div className='content__pictures_subtitle'>Gallery</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/16708357_1028365453935900_4618373591186246655_n.png?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=forAc-Vk9DUAX98luNy&tn=bzXK_gj4XB6n0XQG&_nc_ht=scontent-waw1-1.xx&oh=9991a29118fc8cf1425116a739f30e30&oe=60BBDEBC' alt=''/>
            <div className='content__pictures_title'><p>WielkieSlowa.pl</p>
              <div className='content__pictures_subtitle'>Entertainment website</div>
            </div>
          </div>
          <div className='content__pictures'>
            <div className='content_dots-icon'><MoreHorizIcon style={{color:'white'}}/></div>
            <img className='content__pictures_photo' src='https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/17799010_1881361025520780_2717413506195817367_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=QsgGe-XaLuEAX_P9PQn&_nc_ht=scontent-waw1-1.xx&oh=9f98e268af8a70eca12aee7c452d206f&oe=60BDDA51' alt=''/>
            <div className='content__pictures_title'><p>Foundation "TO ART"</p>
              <div className='content__pictures_subtitle'>non-governmental foundation</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
 
export default UserActivity;


