import React from 'react';
import PropTypes from 'prop-types';
import './product.scss';

class Product extends React.Component {

  state = {
    productId: this.props.id,
  };

  componentDidMount() {
    const { connected } = this.props;
    if (connected) {
      const { image, name, description } = this.props;

      const button = document.getElementById(`product__${this.state.productId}__add__cart`);
      button.addEventListener('click', this.handleClick(name, description, image));
    }
  }

  componentDidUpdate() {
    const element = document.getElementById(`product__${this.state.productId}__description`);
    this.shouldProductShowUp(element);
  }

  shouldProductShowUp = (productDescription) => {

    const { searchbarValue } = this.props;
    const description = productDescription.textContent;
    const foundCount = description.search(searchbarValue);

    if (searchbarValue.trim() != 0) {
      const product = document.getElementById(`product__${this.state.productId}`);

      if (foundCount > 0 && searchbarValue.trim() != '') {
        product.classList.remove('should__not__render');
      }

      else if (foundCount === -1) {
        product.classList = 'product__list__element should__not__render';
      }
    }
  }

  handleClick = (name, description, image) => {

    const { addToCartList } = this.props;

    console.log(name, description, image);
    addToCartList(name, description, image);
  }

  zoomIn = () => {
    const product = document.getElementById(`product__${this.state.productId}__layout`)
    if (product.classList.contains('zoom--in') === false) {
      product.classList.add('zoom--in');
    }
    else if (product.classList.contains('zoom--in')) {
      product.classList.remove('zoom--in');
    }
  }

  render() {
    const { image, name, description, price, stocks, connected } = this.props;
    return (
      <li id={`product__${this.state.productId}`} className="product__list__element">
        <article id={`product__${this.state.productId}__layout`} className="product" onClick={this.zoomIn}>
          <img className="product__image" src={image} alt={`tea__article___${this.state.productId}`} />
          <div className="product__description">
            <h1 className="product__title">{name}</h1>
            <p id={`product__${this.state.productId}__description`} className="product__details">{description}</p>
            <span className="price">{price} €</span>
            <span className="inStock">{stocks} left</span>
          </div>
        </article>
        {connected === true ? <button id={`product__${this.state.productId}__add__cart`} className="add__cart__button" type="button">Add to Cart</button> : '' }
      </li>
    );
  }
}

export default Product;
