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
  <>
    <div id="logo">
      <img src="src/img/logothib2.png" alt="logo" id="logo" />
    </div>
    <nav id="nav">
      <ul>
        <a href="#">Accueil</a>
        <a href="#">Nos thés</a>
        <a href="#">Carte</a>
      </ul>
    </nav>
    <div id="connect">
      <button type="submit"> Sign-in </button>
      <button type="submit"> Sign-up </button>
    </div>
  </>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Header;
