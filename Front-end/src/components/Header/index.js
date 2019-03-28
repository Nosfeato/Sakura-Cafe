/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';


import Username from 'src/components/Username';
import Status from 'src/components/Status';
import SignInLink from 'src/components/SignInLink';
import SignUpLink from 'src/components/SignUpLink';
import Cart from 'src/components/Cart';
import { Link } from 'react-router-dom';
import Nav from './Nav';


/**
 * Local import
 */
import './header.scss';

/**
 * Code
 */
class Header extends React.Component {

  defineModulesToLoad = (username, status) => {
    if (username !== undefined && status !== undefined) {
      return [<SignInLink key="signin" />, <SignUpLink key="signup"/>];
    }
    else {
    return [<Username key="username"/>, <Status key="status" />, <Cart key="cart"/>];
    }
  }

  render() {
    const { username = '', status = '' } = this.props;

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
          <Link to="/"><img src="src/img/logothib2.png" id="logo" alt="sakura-logo" /></Link>
          <div id="session__info">
            {this.defineModulesToLoad(username, status)}
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
