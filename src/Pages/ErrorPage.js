import React from 'react';
import '../Style/ErrorPage.css';

const ErrorPage = () => {
  return ( 
    <>
      <div className='error'>
        <h4>strona nie istnieje</h4>
        <h4>wpisz poprawny adres www </h4>

      </div>
      <div className='login__logo'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png' alt='' />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />
      </div>
    </>
  );
};
 
export default ErrorPage;