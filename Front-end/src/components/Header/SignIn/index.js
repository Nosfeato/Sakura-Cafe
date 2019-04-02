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

    this.validateInput(value, id);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { tryConnectingUser } = this.props;

    tryConnectingUser();
  }

  validateInput = (value, id) => {
    if (id === 'signin__username__input') {
      const span = document.getElementById('signin_username_validation');

      if (value.length < 5) {
        span.className = 'failed';
        span.textContent = 'Username needs to be a minimum of 5 characters';
      }
      else {
        span.className = 'success';
        span.textContent = 'OK !';
      }
    }
    else if (id === 'signin__password__input') {
      const span = document.getElementById('signin_password_validation');
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[*_%$@.!#-])\S{7,}$/;
      const result = regex.test(String(value));
      
      if (result) {
        span.className = 'success';
        span.textContent = 'OK !';
      }

      else {
        span.className = 'failed';
        span.textContent = 'Your password should have at least 7 characters,  1 uppercase and 1 special character (* _ % $ @ . ! # -)';     
      }
    }
  }

  render() {
    const { usernameValue = '', passwordValue = ''} = this.props;

    return(
      <form id="sign__in" onSubmit={this.handleSubmit}>
      <label id="username" value={usernameValue} onChange={this.handleChange} className="signin__label" htmlFor="username">Username
        <input id="signin__username__input" className="signin__input" type="text" placeholder="Enter Username" name="username" required />
        </label>
        <span id="signin_username_validation"></span>

      <label id="password" className="signin__label" htmlFor="password">Password
        <input id="signin__password__input" value={passwordValue} onChange={this.handleChange} className="signin__input" type="password" placeholder="Enter Password" name="password" required />
        <span id="signin_password_validation"></span>
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
