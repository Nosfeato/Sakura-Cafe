/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

import image from 'src/assets/img/logothib2.png';

import Username from 'src/components/Header/Username';
import Status from 'src/components/Header/Status';
import SignInLink from 'src/components/Header/SignInLink';
import SignUpLink from 'src/components/Header/SignUpLink';
import SignOutLink from 'src/containers/SignOut';
import Cart from 'src/components/Header/Cart';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import OnOffSwitch from './OnOffSwitch';


/**
 * Local import
 */


import './header.scss';

/**
 * Code
 */
class Header extends React.Component {

  defineComponentsToLoad = (username, status, connected) => {

    if (connected === true) {

      return [
        <Username key="username" username={username} />,
        <Status key="status" status={status} />,
        <SignOutLink key="signout" />,
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
    const { username, status, connected } = this.props;
    return (
      <header id="header">
        <div id="header__wrapper">
          { /* End of onoffswitch */ }
          <OnOffSwitch />
          <Link to="/home"><img src={image} id="logo" alt="sakura-logo" /></Link>
          <div id="session__info">
            {this.defineComponentsToLoad(username, status, connected)}
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
