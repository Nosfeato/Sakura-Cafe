import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import './products.scss';
import SearchBar from '../SearchBar';
import Button from './Button';


const Products = () => (
  <>
    <Button />
    <div id="product_field">
      <SearchBar />
      <div id="nav__block__product">
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
          <Product />
          <Product />
          <Product />
        </ul>
      </div>
    </div>
  </>
);


export default Products;
