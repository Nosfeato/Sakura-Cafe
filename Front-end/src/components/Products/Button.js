import React from 'react';
import PropTypes from 'prop-types';
import './products.scss';

// faire une class. onclick,nomdefonction

class Button extends React.Component {

  componentDidMount () {
    const button = document.getElementById("burger-button");

    button.addEventListener('click', this.handleClick);
    button.addEventListener('touchstart', this.handleClick);
  }

  handleClick () {
    const categoryList = document.getElementById('list');
    categoryList.style.display = 'block';
}

  render() {
    return (
      <>
        <button id="burger-button" className="nav-button" type="button">&#9776;</button>
      </>
    );
  }
}


export default Button;
