import React from 'react';

class ProductInfo extends React.Component {

  
  handleClick = () => {
    const { removeItemFromCart } = this.props;
    const { index } = this.props;

    removeItemFromCart(index);
    this.dismiss();
  }


  dismiss() {
      this.props.removeFromCart();
      this.props.unmountMe();
  } 

  render() {

    const { name, image, price, amount } = this.props;

    return (
      <li className="cart__element">
        <article className="product__info">
          <img src={image} className="product__info__image" alt="product_picture" />
          <div className="product__info__details">
            <h1 className="product__info__name">{name}</h1>
            <span className="product__info__price">{price}</span>
          </div>
        </article>
        <span>x {amount}</span>
        <button type="button" onClick={this.handleClick}> Remove Product </button>
      </li>
    );
  }
}

export default ProductInfo;
