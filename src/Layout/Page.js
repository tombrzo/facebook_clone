
import {Route, Switch,} from 'react-router-dom';
import HomePage from '../Pages/HomePage.js';
import User from '../Pages/User.js';
import ErrorPage from '../Pages/ErrorPage.js';
import Friends from '../Pages/Friends.js';
import Watch from '../Pages/Watch.js';
import Marketplace from '../Pages/Marketplace.js';
import Groups from '../Pages/Groups.js';


const Page = () => {

  return ( 
    <>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/watch' component={Watch}/> 
        <Route path='/marketplace' component={Marketplace}/>
        <Route path='/groups' component={Groups}/> 
        <Route path='/user' component={User}/>
        <Route                     component={ErrorPage}/>

      </Switch>
    </>

  );
};
 
export default Page;
