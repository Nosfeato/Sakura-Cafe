/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

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
        <button type="submit"> Sign-in </button>
        <button type="submit"> Sign-up </button>
      </div>
    </div>
    <nav id="nav">
      <ul id="nav-links-list">
        <li className="nav-link"><a href="#">Home</a></li>
        <li className="nav-link"><a href="#">Teas</a></li>
        <li className="nav-link"><a href="#">Map</a></li>
      </ul>
    </nav>
  </header>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Header;
