/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';


import Username from 'src/components/Header/Username';
import Status from 'src/components/Header/Status';
import SignInLink from 'src/components/Header/SignInLink';
import SignUpLink from 'src/components/Header/SignUpLink';
import SignOut from 'src/components/Header/SignOut';
import Cart from 'src/components/Header/Cart';
import { Link } from 'react-router-dom';
import Nav from './Nav';


/**
 * Local import
 */
import image from 'src/img/logothib2.png';

import './header.scss';

/**
 * Code
 */
class Header extends React.Component {

  defineComponentsToLoad = (username, status) => {
    if (username !== undefined && status !== undefined) {
      return [
        <Username key="username" username={username} />,
        <Status key="status" status={status} />,
        <SignOut key="signout" />,
        <Cart key="cart" />,
      ];
    }
    else {
      return [
        <SignInLink key="signin" />,
        <SignUpLink key="signup" />,
      ];
    }
  }

  render() {
    const { username, status } = this.props;
    return (
      <header id="header">
        <div id="head">
          <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" />
            <label id="animation__selector" className="onoffswitch-label" htmlFor="myonoffswitch">
            <span className="onoffswitch-inner" />
            <span className="onoffswitch-switch" />
            </label>
            <p id="animation__text">Animation</p>
            </div> { /* End of onoffswitch */ }
            <Cart />
            <Link to="/"><img src={image} id="logo" alt="sakura-logo" /></Link>
          <div id="session__info">
            {this.defineComponentsToLoad(username, status)}
          </div>
        </div>
        <Nav />
      </header>
    );
  }
}
/* Nav.propTypes */

/**
 * Export
 */
export default Header;
