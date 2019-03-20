/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import product from 'src/data/articles.json';

/**
 * Code
 */

const Article = ({
  title, description, image, price,
}) => (
  <div className="article">
    <h2 className="article-title">{product.title}</h2>
    <p className="article-description">{product.description}</p>
    <img className="image-news" alt="flash-info" src={product.image} />
    <p className="price">{product.price}</p>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

/**
 * Export
 */
export default Article;
