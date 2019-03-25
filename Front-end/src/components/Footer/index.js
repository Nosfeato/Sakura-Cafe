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
    <ul id="extras__list">
      <li className="extras__link">Legal Mentions</li>
      <li className="extras__link">Producer</li>
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
