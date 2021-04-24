import React from 'react';
import '../Style/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase.js';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

const Login = () => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png' alt='' />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
      </div>

      <Button type='submit' onClick={signIn}>Sign in</Button>

    </div>
  );
};

export default Login;