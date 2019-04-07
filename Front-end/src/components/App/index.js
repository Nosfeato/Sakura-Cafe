/**
 * NPM import
 */
import React from 'react';
import { withCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';

/**
 * Local import
 */
import './app.scss';


import Header from 'src/containers/Header';

import Main from 'src/components/Main';

import Footer from 'src/components/Footer';


/**
 * Code
 */
class App extends React.Component {

  state = {
    animate: true,
    redirect: false,
  }


  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  }

  onLoad = (cookies) => {

    const value = cookies.get('animation');
    if (value === undefined) {
      cookies.set('animation', true, { path: '/' });
    }
  }

  handleClick = () => {
    const button = document.getElementById('to__home__button');
    const divLeft = document.getElementById('animation__left__side');
    const divRight = document.getElementById('animation__right__side');

    button.classList.add('button--animate');
    divLeft.classList.add('button--animate');
    divRight.classList.add('button--animate');

    setTimeout(() => {
      this.setState({ animate: false });
    }, (6 * 1000));

    setTimeout(() => {
      this.setRedirect();
    }, (6 * 1000));
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/home" />;
    }
  }

  render() {
    const { cookies } = this.props;
    const { animate } = this.state;
    return (
      <>
        {this.onLoad(cookies)}
        {(cookies.get('animation') === 'true' && animate === true) ? (
          <>
            <div id="animation__left__side" />
            <div id="animation__right__side" />

            {this.renderRedirect()}
            <button id="to__home__button" type="button" onClick={this.handleClick}>Click Here </button>
          </>
        ) : null}
        <div
          id="app"
          className={(cookies.get('animation') === 'true' && animate === true) ? 'disappear' : null}
        >

          <Header />
          <Main />
          <Footer />
        </div>
      </>
    );
  }
}

/**
 * Export
 */
export default withCookies(App);
