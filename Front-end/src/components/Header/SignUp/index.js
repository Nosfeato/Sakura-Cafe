/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

/**
 * Local import
 */
import './signup.scss';

/**
 * Code
 */

class SignUp extends React.Component {

  state = {
    redirect: false,
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  }

  handleChange = (evt) => {
    const { value, id } = evt.target;

    const { changeInput } = this.props;

    changeInput(value, id);
    this.validateInput(value, id);
    this.shouldRegisterRender();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { tryRegisteringUser } = this.props;

    tryRegisteringUser();
    this.setRedirect();
  }

  validateInput = (value, id) => {
    if (id === 'signup__username__input') {
      const span = document.getElementById('signup__username__validation');

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
      const span = document.getElementById('signup__email__validation');
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const result = regex.test(String(value));
      if (result) {
        span.className = 'success';
        span.textContent = 'OK !';
      }
      else {
        span.className = 'failed';
        span.textContent = 'The email format you have entered is incorrect';
      }
    }
    else if (id === 'signup__password__input') {
      const span = document.getElementById('signup__password__validation');
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
      const input = document.getElementById('signup__password__input');
      const span = document.getElementById('signup__confirm__password__validation');

      if (value !== input.value) {
        span.className = 'failed';
        span.textContent = 'Your input is different from the entered password. Please confirm your password choice by writing the same input as your password';
      }
      else {
        span.className = 'success';
        span.textContent = 'OK !';
      }
    }
  }

  shouldRegisterRender = () => {
    const spanUsername = document.getElementById('signup__username__validation');
    const spanEmail = document.getElementById('signup__email__validation');
    const spanPassword = document.getElementById('signup__password__validation');
    const spanConfirmPassword = document.getElementById('signup__confirm__password__validation');
    const test1 = spanUsername.classList.contains('success');
    const test2 = spanEmail.classList.contains('success');
    const test3 = spanPassword.classList.contains('success');
    const test4 = spanConfirmPassword.classList.contains('success');
    const test5 = spanUsername.classList.contains('fail');
    const test6 = spanEmail.classList.contains('fail');
    const test7 = spanPassword.classList.contains('fail');
    const test8 = spanConfirmPassword.classList.contains('fail');

    const login = document.getElementById('register__button');
    if (test1 && test2 && test3 && test4) {
      login.classList.remove('not--visible');
    }
    else if (test5 && test6 && test7 && test8) {
      login.classList.add('not--visible');
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  }


  render() {

    const { usernameValue = '', emailValue = '', passwordValue = '', confirmPasswordValue = ''} = this.props;

    return (
      <form id="sign__up" method="post" action="" onSubmit={this.handleSubmit}>
        <label id="username" className="signup__label" htmlFor="username">Username</label>
        <input id="signup__username__input" className="signup__input" type="text" placeholder="Enter Username" name="username" value={usernameValue} onChange={this.handleChange} required />
        <span id="signup__username__validation" className="input__info" />

        <label id="email__adress" className="signup__label" htmlFor="email__adress">email</label>
        <input id="signup__email__input" className="signup__input" type="email" placeholder="Enter Email" name="email__adress" value={emailValue} onChange={this.handleChange} required />
        <span id="signup__email__validation" className="input__info" />

        <label id="password" className="signup__label" htmlFor="password">Password</label>
        <input id="signup__password__input" className="signup__input" type="password" placeholder="Enter Password" name="password" value={passwordValue} onChange={this.handleChange} required />
        <span id="signup__password__validation" className="input__info" />

        <label id="confirm__password" className="signup__label" htmlFor="confirm__password">Confirm Password</label>
        <input id="signup__password__confirm__input" className="signup__input" type="password" placeholder="Enter Password" name="confirm__password" value={confirmPasswordValue} onChange={this.handleChange} required />
        <span id="signup__confirm__password__validation" className="input__info" />

        {this.renderRedirect()}
        <button id="register__button" className="not--visible" type="submit">Register</button>
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
