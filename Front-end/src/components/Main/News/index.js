/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';


import Arrow from 'src/containers/Arrow';

/**
 * Local import
 */
import './news.scss';


/**
 * Code
 */

class News extends React.Component {


  componentDidMount() {
    const { getNewsList } = this.props;
    const { newsList } = this.props;
    if (newsList.length <= 1) {
      getNewsList();
    }
  }

  shouldArrowRender = (arrow) => {
    const { newsList, selectedNews } = this.props;
    const listLength = newsList.length;
    if (arrow === 'up' && selectedNews > 0) {
      const jsx = <Arrow selectedArrowModule="up" listLength={listLength} selection={selectedNews} data="news_selection" />;
      return jsx;
    }
    if (arrow === 'down' && (selectedNews + 1) < listLength) {
      const jsx = <Arrow selectedArrowModule="down" listLength={listLength} selection={selectedNews} data="news_selection" />;
      return jsx;
    }
  }

  render() {
    const { newsList, selectedNews} = this.props;

    const { title, description, image, date } = newsList[selectedNews];

    return (
      <div id="news__block">
        {this.shouldArrowRender('up')}

        <div id="news__selection" className="news">
          { (image !== undefined) ? 
            <img className="news__image" alt="" src={image} />
            : null}
          <div className="news__text">
            <span className="news__date">{date}</span>
            <h1 className="news__title">{title}</h1>
            <p className="news__description">{description}</p>
          </div>
        </div>

        {this.shouldArrowRender('down')}
      </div>
    );
  }
}

/* News.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}; */

/**
 * Export
 */
export default News;
