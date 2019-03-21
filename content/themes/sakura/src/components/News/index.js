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
  <div id="news">
    <div className="news-image">
      <img className="news-image" alt="flash-info" src="https://i.goopics.net/nG7Jl.jpg" />
    </div>
    <h3 className="news-title">News</h3>
    <p className="news-text">Faites chauffer les bouilloires, voici l'info du soir !!!</p>
    <p>Tributus maxime est maximis meum homines exigua in est necessitatem cum ex dis reprehendant quindecim ad magis Ergo admirentur ex quae publicae hominis tributus exigua meum quid cum sententia eadem Rei dignitatem immortalibus dierum et immortalibus immortalibus dignitatem antea satis idem pertinerent meum immortalibus hominis immortalibus cum ex causa. </p>
  </div>
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
