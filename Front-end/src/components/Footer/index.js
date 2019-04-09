/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Local import
 */
import './footer.scss';

/**
 * Code
 */

const Footer = () => (
  <footer id="footer">
    <ul id="extras__list">
      <li className="extras__link"><Link to="Legal-Mentions"> Legal Mentions </Link></li>
      <li className="extras__link"><Link to="Producers"> Producers </Link></li>
    </ul>
  </footer>
);

/* News.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}; */

/**
 * Export
 */
export default Footer;
