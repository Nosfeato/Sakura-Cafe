import React from 'react';
import PropTypes from 'prop-types';

import Product from 'src/components/Products/Product';
import './products.scss';
import SearchBar from 'src/components/SearchBar';
import Button from 'src/components/Products/Button';
import Category from 'src/components/Category';


const categoryList = ['Thé Vert', 'Thé Blanc', 'Thé Noir', 'Thé Fruité'];

const Products = () => (
  <>
    <Button />
    <SearchBar />
    <div id="nav__block__product">
      <sidebar id="sidebar">
        <ul id="list">
          {categoryList.map(category => (
            <Category name={category} />
          ))}
        </ul>
      </sidebar>

      <ul id="productlist">
        <Product />
      </ul>
    </div>
  </>
);


export default Products;
