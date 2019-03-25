import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import './products.scss';
import SearchBar from '../SearchBar';


const Products = () => (
  <>
    <div id="search">
      <SearchBar />
    </div>
    <sidebar id="sidebar">
      <ul id="list">
        <li>category</li>
        <li>category</li>
        <li>category</li>
        <li>category</li>
      </ul>
    </sidebar>
    <ul id="productlist">
      <Product />
    </ul>
  </>
);

export default Products;
