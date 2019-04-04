import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';

import image from 'src/img/teas/tea1.jpg';


const Product = ({ name, description, addToCartList }) => (
  <li className="productlist_li">
    <article className="product">
      <img className="product__image" src={image} alt="article_x" />
      <div className="product__description">
        <h1 className="product__title">{name}</h1>
        <p className="product__details">{description}</p>
      </div>
    </article>
    <button type="button" onClick={addToCartList(name, description)} />
  </li>
);

export default Product;
