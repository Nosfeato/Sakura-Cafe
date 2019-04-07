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
class SignOut extends React.Component {

  handleClick = () => {
    const { signOut } = this.props;

    signOut();
  }

  render() {
    return (
      <>
        <button id="sign__out" onClick={this.handleClick} className="session__info__button" type="button">Disconnect</button>
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
export default SignOut;
