/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

import Nav from './Nav';

/**
 * Local import
 */
import './header.scss';

/**
 * Code
 */

const Header = () => (
  <header id="header">
    <div id="head">
      <button id="toggle" type="button">Animation</button>
      <img src="src/img/logothib2.png" id="logo" alt="sakura-logo" />
      <div id="connect">
        <button id="sign__in__button"type="button"><a href="/sign-in"> Sign-in </a></button>
        <button id="sign__up__button" type="button"><a href="/sign-up"> Sign-up </a></button>
      </div>
    </div>
    <Nav />
  </header>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Header;
