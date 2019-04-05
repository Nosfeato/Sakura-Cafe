import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';


const Product = ({ image, name, description, addToCartList }) => (
  <li className="product__list__element">
    <article className="product">
      <img className="product__image" src={image} alt="article_x" />
      <div className="product__description">
        <h1 className="product__title">{name}</h1>
        <p className="product__details">{description}</p>
      </div>
    </article>
    <button className="add__cart__button" type="button" onClick={addToCartList(name, description, image)}>Add To Cart</button>
  </li>
);


export default Product;
