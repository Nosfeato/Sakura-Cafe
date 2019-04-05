import React from 'react';
import PropTypes from 'prop-types';


const ProductInfo = ({ image, name, description}) => (
  <li className="product__info__list__element">
    <article className="product__info">
      <img className="product__info__image" src={image} alt="article_x" />
      <div className="product__info__description">
        <h1 className="product__info__title">{name}</h1>
        <p className="product__info__details">{description}</p>
      </div>
    </article>
    <button className="add__cart__button" type="button">Add To Cart</button>
  </li>
);


export default ProductInfo;
