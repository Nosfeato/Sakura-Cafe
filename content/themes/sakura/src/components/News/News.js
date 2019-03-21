/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './news.scss';

/**
 * Code
 */
const News = () => (
  <>
    <div className="news">
      <h3 className="news-title">News</h3>
      <img className="image-news" alt="flash-info" src="https://i.goopics.net/5JdY7.png" />
    </div>
    <p className="info-name">Faites chauffer les bouilloires, voici l'info du soir !!!</p>
  </>
);

/* News.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}; */

/**
 * Export
 */
export default News;
