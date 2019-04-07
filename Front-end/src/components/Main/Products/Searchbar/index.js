/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './searchbar.scss';

/**
 * Code
 */
class SearchBar extends React.Component {

  handlechange = (evt) => {
    const { value, id } = evt.target;

    const { changeInput } = this.props;

    changeInput(value, id);
  }

  render() {
    const { searchbarValue = ''} = this.props;

    return (
      <>
        <input id="searchbar__input" type="text" placeholder="Search" value={searchbarValue} onChange={this.handlechange} />
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
export default SearchBar;
