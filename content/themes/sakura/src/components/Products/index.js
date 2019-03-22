import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import './products.scss';


const Products = () => (
  <>
    <sidebar id="sidebar">
      <ul id="list">
        <li>category</li>
        <li>category</li>
        <li>category</li>
        <li>category</li>
      </ul>
    </sidebar>
    <input id="search" type="text" placeholder="Search" />
    <div id="productlist">
      <Product />
    </div>
  </>
);

export default Products;
