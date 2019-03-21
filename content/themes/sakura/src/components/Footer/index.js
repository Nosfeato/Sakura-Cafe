/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './footer.scss';

/**
 * Code
 */

const Footer = () => (
  <footer id="footer">
    <ul id="menu">
      <li>Legal Mentions</li>
      <li>Producer</li>
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
