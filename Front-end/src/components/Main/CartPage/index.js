/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';


import Arrow from 'src/containers/Arrow';

/**
 * Local import
 */
import './cartpage.scss';
import image from 'src/img/panda.png';

/**
 * Code
 */
class CartPage extends React.Component {


  componentDidMount() {
    const { getNewsList } = this.props;

    getNewsList();
  }

  shouldArrowRender = (arrow) => {
    const { newsList, selectedNews } = this.props;
    const listLength = newsList.length;
    if (arrow === 'up' && selectedNews > 0) {
      const jsx = <Arrow selectedArrowModule="up" listLength={listLength} selection={selectedNews} data="news_selection" />;
      return jsx;
    }
    if (arrow === 'down' && selectedNews < listLength) {
      const jsx = <Arrow selectedArrowModule="down" listLength={listLength} selection={selectedNews} data="news_selection" />;
      return jsx;
    }
  }

  render() {
    return (
      <>
        {this.shouldArrowRender('up')}
        <div id="news_selection" className="news">
          <img className="news__image" alt="" src={image} />
          <div className="news__text">
            <span className="news__date">Date</span>
            <h1 className="news__title">Faites chauffer les bouilloires, voici l'info du soir !!!</h1>
            <p className="news__description">Tributus maxime est maximis meum homines exigua in est necessitatem cum ex dis reprehendant quindecim ad magis Ergo admirentur ex quae publicae hominis tributus exigua meum quid cum sententia eadem Rei dignitatem immortalibus dierum et immortalibus immortalibus dignitatem antea satis idem pertinerent meum immortalibus hominis immortalibus cum ex causa. </p>
          </div>
        </div>
        {this.shouldArrowRender('down')}
      </>

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
export default CartPage;
