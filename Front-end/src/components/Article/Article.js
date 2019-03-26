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
  product
}) => (
  <div className="article">
    <h2 className="article-title">{title}</h2>
    <p className="article-description">{description}</p>
    <img className="image-news" alt="flash-info" src={image} />
    <p className="price">{price}</p>
  </div>
);

Article.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  })
};

/**
 * Export
 */
export default Article;
