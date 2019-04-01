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
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { tryConnectingUser } = this.props;

    tryConnectingUser();
  }


  render() {
    const { usernameValue = '', passwordValue = ''} = this.props;

    return(
      <form id="sign__in" onSubmit={this.handleSubmit}>
      <label id="username" value={usernameValue} onChange={this.handleChange} className="signin__label" htmlFor="username">Username
        <input id="signin__username__input" className="signin__input" type="text" placeholder="Enter Username" name="username" required />
      </label>
  
      <label id="password" className="signin__label" htmlFor="password">Password
        <input id="signin__password__input" value={passwordValue} onChange={this.handleChange} className="signin__input" type="password" placeholder="Enter Password" name="password" required />
      </label>
      <button id="register__button" type="submit">Login</button>
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
