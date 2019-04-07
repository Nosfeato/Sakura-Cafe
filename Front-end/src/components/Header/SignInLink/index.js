import React from 'react';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';

const SignInLink = () => (
  <>
    <button id="sign__in__button" className="session__info__button" type="button"><Link to="/sign-in"> Sign-in </Link></button>
  </>
);

export default SignInLink;
