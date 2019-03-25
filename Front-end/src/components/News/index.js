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
  <div className="news">
    
    <img className="news__image" alt="" src="https://i.goopics.net/nG7Jl.jpg" />
    
    <div className="news__text">
      <span className="news__date">Date</span>
      <h1 className="news__title">Faites chauffer les bouilloires, voici l'info du soir !!!</h1>
      <p className="news__description">Tributus maxime est maximis meum homines exigua in est necessitatem cum ex dis reprehendant quindecim ad magis Ergo admirentur ex quae publicae hominis tributus exigua meum quid cum sententia eadem Rei dignitatem immortalibus dierum et immortalibus immortalibus dignitatem antea satis idem pertinerent meum immortalibus hominis immortalibus cum ex causa. </p>
    </div>
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
