/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './searchbar.scss';

/**
 * Code
 */

const SearchBar = () => (
  <>
    <input id="searchbar" type="text" placeholder="Search" />
  </>
);

/* News.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}; */

/**
 * Export
 */
export default SearchBar;
