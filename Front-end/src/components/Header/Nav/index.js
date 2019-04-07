/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Local import
 */

import './nav.scss';
/**
 * Code
 */

const Nav = () => (
  <ul id="nav__links__list">
    <li><button className="nav__link" type="button"><Link to="/home">Home</Link></button></li>
    <li><button className="nav__link" type="button"><Link to="/products">Products</Link></button></li>
    <li><button className="nav__link" type="button"><Link to="/map">Map</Link></button></li>
  </ul>
);

/* Nav.propTypes */

/**
 * Export
 */
export default Nav;
