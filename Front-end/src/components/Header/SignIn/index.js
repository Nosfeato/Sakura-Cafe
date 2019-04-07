/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';


/**
 * Local import
 */
import './signin.scss';
/**
 * Code
 */
class SignIn extends React.Component {


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
    this.shouldLoginRender();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { tryConnectingUser } = this.props;

    tryConnectingUser();
    this.setRedirect();
  }

  validateInput = (value, id) => {
    if (id === 'signin__username__input') {
      const span = document.getElementById('signin__username__validation');

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
      const span = document.getElementById('signin__password__validation');
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

  shouldLoginRender = () => {
    const spanUsername = document.getElementById('signin__username__validation');
    const spanPassword = document.getElementById('signin__password__validation');
    const login = document.getElementById('login__button');
    if (spanUsername.classList.contains('success') && spanPassword.classList.contains('success')) {
      login.classList.remove('not--visible');
    }
    else if (spanUsername.classList.contains('fail') && spanPassword.classList.contains('fail')) {
      login.classList.add('not--visible');
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  }


  render() {
    const { usernameValue = '', passwordValue = ''} = this.props;

    return (
      <form id="sign__in" onSubmit={this.handleSubmit}>

        <label id="username" value={usernameValue} onChange={this.handleChange} className="signin__label" htmlFor="username">Username
          <input id="signin__username__input" className="signin__input" type="text" placeholder="Enter Username" name="username" required />
        </label>
        <span id="signin__username__validation" />

        <label id="password" className="signin__label" htmlFor="password">Password
          <input id="signin__password__input" value={passwordValue} onChange={this.handleChange} className="signin__input" type="password" placeholder="Enter Password" name="password" required />
        </label>
        <span id="signin__password__validation" />

        {this.renderRedirect()}
        <button id="login__button" className="not--visible" type="submit">Login</button>

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
