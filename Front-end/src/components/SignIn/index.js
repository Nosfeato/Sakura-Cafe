/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './signin.scss';

/**
 * Code
 */

class SignIn extends React.Component {


  handleChange = (evt) => {
    const { value, id } = evt.target;

    const { changeInput } = this.props;

    changeInput(value, id);
  };

  render() {

    const { usernameValue, passwordValue } = this.props;

    return (

      <form id="sign__in">
        <label className="signin__label" htmlFor="username">Username
          <input id="username__input" className="signin__input" type="text" placeholder="Enter Username" name="username" value={usernameValue} onChange={this.handleChange} required />
        </label>

        <label id="password" className="signin__label" htmlFor="password">Password
          <input id="password__input" className="signin__input" type="password" placeholder="Enter Password" name="password" value={passwordValue} onChange={this.handleChange} required />
        </label>
        <button id="signin__button" type="submit">Login</button>
      </form>
    );
  }
}

/**
 * Proptypes
 */

/**
 * Export
 */
export default SignIn;
