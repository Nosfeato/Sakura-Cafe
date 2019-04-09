import React from 'react';


import ProductInfo from 'src/containers/ProductInfo';
import PaypalButton from './PaypalButton';

import './cart.scss';


const CLIENT = {
  sandbox: 'AeCkfcw8bwNDSbQYiZkqNiJWfBWtkEwROV04s7WxKUsZvnzqfD-btb3afli_7TY9mU4AhshhTcyn2Yin',
  production: 'AersYlxeYNlxOI9oNkLNWstiY6aIT4vRerg4JHXhQHi8hQOo7POXl82lAHliW6iASnzFXk4x-KqncqEr',
};

const ENV = process.env.NODE_ENV === 'production'
  ? 'production'
  : 'sandbox';

class Cart extends React.Component {
  count = 0;

  totalValue = 0;

  constructor() {
    super();
    this.handleChildUnmount = this.handleChildUnmount.bind(this);
  }


  counter = () => {
    this.count = this.count + 1;
    return this.count;
  }

  handleChildUnmount = () => {
    this.removeFromTotalValue();
    this.forceUpdate();
  }

  removeFromTotalValue = (value, amount) => {
    this.totalValue -= value * amount;
  }

  addToTotalValue = (value, amount) => {
    this.totalValue += value * amount;
  }

  render() {
    const onSuccess = (payment) => {
      console.log('Successful payment!', payment);
    };

    const onError = (error) => {
      console.log('Erroneous payment OR failed to load script!', error);
    };

    const onCancel = (data) => {
      console.log('Cancelled payment!', data);
    };

    const { userSelection } = this.props;

    userSelection.forEach(product => {
      const value = product.price;
      const amount = product.amount;
      this.addToTotalValue(value, amount);
    });


    return (

      <div id="cart__info">

        {userSelection[0] !== undefined ? 
          <ul id="selection__list">
            {userSelection.map(product => 
            (
              <ProductInfo
                key={product.name}
                name={product.name}
                image={product.image}
                id={(this.counter() - 1)}
                price={product.price}
                amount={product.amount}
                unmountMe={this.handleChildUnmount}
                removeFromCart={this.removeFromTotalValue}
              />
            ))}
          </ul>
          :
          <p className="cart__error">Cannot show cart as you have not yet added a product to it</p>
          }
        {(userSelection[0] !== undefined) ? 
          (
            <PaypalButton
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={'EUR'}
              total={this.totalValue}
              onSuccess={onSuccess}
              onError={onError}
              onCancel={onCancel}
            />
          )
          : null
        }

      </div>
    );
  }
}

export default Cart;
