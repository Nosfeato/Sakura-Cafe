/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './signin.scss';

/**
 * Code
 */

const SignIn = () => (

  <form id="sign__in">
    <label id="username" className="signin__label" htmlFor="username">Username
      <input className="signin__input" type="text" placeholder="Enter Username" name="username" required />
    </label>

    <label id="password" className="signin__label" htmlFor="password">Password
      <input className="signin__input" type="password" placeholder="Enter Password" name="password" required />
    </label>
    <button id="register__button" type="submit">Login</button>
  </form>

);

/**
 * Proptypes
 */

/**
 * Export
 */
export default SignIn;
