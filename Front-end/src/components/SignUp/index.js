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
  }

  render() {

    const { value } = this.props;

    return (
      <form id="sign__up" method="post" action="">
        <label id="username" className="signup__label" htmlFor="username">Username</label>
        <input id="signup__username__input" className="signup__input" type="text" placeholder="Enter Username" name="username" value={value} changeInput={this.handleChange} required />
        <span id="missUsername"></span>

        <label id="email__adress" className="signup__label" htmlFor="email__adress">email</label>
        <input id="signup__email__input" className="signup__input" type="email" placeholder="Enter Email" name="email__adress" value={value} changeInput={this.handleChange} required />

        <label id="password" className="signup__label" htmlFor="password">Password</label>
        <input id="signup__password__input" className="signup__input" type="password" placeholder="Enter Password" name="password" value={value} changeInput={this.handleChange} required />

        <label id="confirm__password" className="signup__label" htmlFor="confirm__password">Confirm Password</label>
        <input id="signup__password__confirm__input" className="signup__input" type="password" placeholder="Enter Password" name="confirm__password" value={value} changeInput={this.handleChange} required />

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
