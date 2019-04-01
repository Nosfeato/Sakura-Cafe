import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';


const Product = () => (
  <li className="productlist_li">
    <article className="product">
      <img className="product__image" src="./src/img/teas/tea1.jpg" alt="article_x" />
      <div className="product__description">
        <h1 className="product__title">Thé fruits exotiques</h1>
        <p className="product__details">Subtil mélange de thé noir de Kumamoto et de fruits séchés.</p>
      </div>
    </article>
  </li>
);

export default Product;
