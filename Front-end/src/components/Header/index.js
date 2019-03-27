/* eslint-disable jsx-a11y/label-has-associated-control */
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
      <div className="onoffswitch">
        <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked />
        <label className="onoffswitch-label" htmlFor="myonoffswitch">
          <span className="onoffswitch-inner" />
          <span className="onoffswitch-switch" />
        </label>
        <p id="animation__text">Animation</p>
      </div> { /* End of onoffswitch */ }
      <img src="src/img/logothib2.png" id="logo" alt="sakura-logo" />

      <div id="session__info">
        <button id="sign__in__button" type="button"><a href="/sign-in"> Sign-in </a></button>
        <button id="sign__up__button" type="button"><a href="/sign-up"> Sign-up </a></button>
        <button id="sign__up__button" type="button"><a href="#"><i className="fa fa-shopping-cart" /></a></button>
      </div> { /* End of session__info */ }
    </div> { /* End of #head */ }
    <Nav />
  </header>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Header;
