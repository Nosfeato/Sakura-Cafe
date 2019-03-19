/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const News = ({ title, info, image }) => (
  <div className="news">
    <h2 className="news-title">{title}</h2>
    <p className="ingredient-name">{info}</p>
    <img className="image-news" alt="flash-info" src={image} />
  </div>
);

News.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default News;
