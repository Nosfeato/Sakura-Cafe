/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

import './category.scss';


/**
 * Code
 */


const Category = ({ name }) => (
  <li className="category__element">
    <button className="category__element__button" type="button">{name}</button>
  </li>
);


/**
 * Export
 */
export default Category;
