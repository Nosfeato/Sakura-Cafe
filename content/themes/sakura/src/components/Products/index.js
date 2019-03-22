import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';
import './products.scss';


const Products = () => (
  <>
    <sidebar>
      <ul>
        <li>category</li>
        <li>category</li>
        <li>category</li>
        <li>category</li>
      </ul>
    </sidebar>
    <div id="productlist">
      <Product />
    </div>
  </>
);

export default Products;
