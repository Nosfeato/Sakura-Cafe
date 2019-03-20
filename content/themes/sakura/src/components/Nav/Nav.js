/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './nav.scss';

/**
 * Code
 */
const Nav = ({ categories, onCategoryClick }) => (
  <nav id="nav">
    {categories.map(category => (
      <a
        key={category}
        className="nav-link"
        onClick={onCategoryClick(category)}
      >
        {category}
      </a>
    ))}
  </nav>
);

Nav.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Nav;
