/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './signup.scss';

/**
 * Code
 */

const SignUp = () => (
  <form id="sign__up" method="post" action="">
    <label id="username" className="signup__label" htmlFor="username">Username</label>
    <input className="signup__input" type="text" placeholder="Enter Username" name="username" required />
    <span id="missUsername"></span>

    <label id="email__adress" className="signup__label" htmlFor="email__adress">email</label>
    <input className="signup__input" type="email" placeholder="Enter Email" name="email__adress" required />

    <label id="password" className="signup__label" htmlFor="password">Password</label>
    <input className="signup__input" type="password" placeholder="Enter Password" name="password" required />

    <label id="confirm__password" className="signup__label" htmlFor="confirm__password">Confirm Password</label>
    <input className="signup__input" type="password" placeholder="Enter Password" name="confirm__password" required />

    <button id="register__button" type="submit">Register</button>
  </form>
);

/**
 * Proptypes
 */

/**
 * Export
 */
export default SignUp;
