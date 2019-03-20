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
  <header>
    <div id="title">
      <h1>Sakura Tea House</h1>
      <div id="connect">
        <input type="text" placeholder="Identifiant" />
        <input type="text" placeholder="Mot de passe" />
        <button type="submit"> Connexion </button>
      </div>
    </div>
    <nav id="nav">
      <ul>
        <a href="#">Accueil</a>
        <a href="#">Nos thés</a>
        <a href="#">Carte</a>
      </ul>
    </nav>
  </header>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Header;
