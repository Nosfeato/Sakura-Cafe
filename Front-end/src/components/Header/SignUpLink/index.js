import React from 'react';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';

const SignUpLink = () => (
  <>
    <button id="sign__up__button" className="session__info__button" type="button"><Link to="/sign-up"> Sign-up </Link></button>
  </>
);

export default SignUpLink;
