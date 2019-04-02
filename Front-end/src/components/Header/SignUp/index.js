/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './signup.scss';

/**
 * Code
 */


class SignUp extends React.Component {


  handleChange = (evt) => {
    const { value, id } = evt.target;

    const { changeInput } = this.props;

    changeInput(value, id);

    this.validateInput(value, id);
  }


  handleSubmit = (evt) => {
    evt.preventDefault();
    const { registerUser } = this.props;

    registerUser();
  }


  validateInput = (value, id) => {
    if (id === 'signup__username__input') {

      const span = document.getElementById('username_validation_message');

      if (value.length < 5) {
        span.className = 'failed';
        span.textContent = 'Username needs to be a minimum of 5 characters';
      }
      else {
        span.className = 'success';
        span.textContent = 'OK !';
      }
    }

    else if (id === 'signup__email__input') {

      const span = document.getElementById('email_validation_message');
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = regex.test(String(value).toLowerCase());

      if (result) {
        span.className = 'success';
        span.textContent = 'OK !';
      }

      else {
        span.className = 'failed';
        span.textContent = 'Please enter a correct email address';
      }
    }

    else if (id === 'signup__password__input') {
      const span = document.getElementById('password_validation_message');
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

    else if (id === 'signup__password__confirm__input') {
      const span = document.getElementById('confirm_password_validation_message');
      const pwd = document.getElementById('signup__password__input');

      if (pwd.value === value) {
        span.className = 'success';
        span.textContent = 'OK !';
      }
      else {
        span.className = 'failed';
        span.textContent = 'Passwords does not match';
      }
    
    }

  }


  render() {

    const { usernameValue = '', emailValue = '', passwordValue = '', confirmPasswordValue = ''} = this.props;


    return (
      <form id="sign__up" method="post" action="" onSubmit={this.handleSubmit}>
        <label id="username" className="signup__label" htmlFor="username">Username</label>
        <input id="signup__username__input" className="signup__input" type="text" placeholder="Enter Username" name="username" value={usernameValue} onChange={this.handleChange} required />
        <span id="username_validation_message"></span>

        <label id="email__adress" className="signup__label" htmlFor="email__adress">email</label>
        <input id="signup__email__input" className="signup__input" type="email" placeholder="Enter Email" name="email__adress" value={emailValue} onChange={this.handleChange} required />
        <span id="email_validation_message"></span>

        <label id="password" className="signup__label" htmlFor="password">Password</label>
        <input id="signup__password__input" className="signup__input" type="password" placeholder="Enter Password" name="password" value={passwordValue} onChange={this.handleChange} required />
        <span id="password_validation_message"></span>

        <label id="confirm__password" className="signup__label" htmlFor="confirm__password">Confirm Password</label>
        <input id="signup__password__confirm__input" className="signup__input" type="password" placeholder="Enter Password" name="confirm__password" value={confirmPasswordValue} onChange={this.handleChange} required />
        <span id="confirm_password_validation_message"></span>

        <button id="register__button" type="submit">Register</button>
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
export default SignUp;
