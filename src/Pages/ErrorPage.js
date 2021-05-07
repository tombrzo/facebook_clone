import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPage = () => {
  return ( 
    <>
      <p>strona nie istnieje</p>
      <Link className=' nav__link nav__link1' to="/">Back</Link>
    </>
  );
};
 
export default ErrorPage;