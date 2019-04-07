import React from 'react';
import PropTypes from 'prop-types';

import Product from 'src/containers/Product';
import './products.scss';
import SearchBar from 'src/containers/Searchbar';
import Button from 'src/components/Main/Products/Button';
import Category from 'src/components/Main/Products/Category';
import Arrow from 'src/containers/Arrow';

class Products extends React.Component {

  componentDidMount = () => {
    const { getProducts, getCategories } = this.props;
    const { productsList,categoryList } = this.props;

    if (categoryList[0] === undefined) {
      getCategories();
    }
    if (productsList[0] === undefined) {
      getProducts();
    }
  }

  shouldArrowRender = (arrow, type) => {

    const name = type.concat('_selection');

    if (type === 'products') {
      const { productsList, selectedProducts } = this.props;

      const listLength = productsList.length;

      if (arrow === 'up' && selectedProducts > 0) {
        const jsx = <Arrow selectedArrowModule="up" listLength={listLength} selection={selectedProducts} data={name} />;
        return jsx;
      }
      if (arrow === 'down' && ((selectedProducts + 1) * 8) < (listLength)) {
        const jsx = <Arrow selectedArrowModule="down" listLength={listLength} selection={selectedProducts} data={name} />;
        return jsx;
      }
    }
  }

  calculateRange = (int) => {
    const min = ((int * 8) + 0);
    const max = ((int * 8) + 8);
    return [min, max];
  }

  mapProductsFromRange = (range, array) => {

    const min = range[0];
    const max = range[1];
    var productsArray = [];

    for (let x = min; x < max; x += 1) {
      productsArray.push(array[x]);
    }

    return productsArray;
  }


  render() {

    const { productsList, categoryList } = this.props;
    const { selectedProducts } = this.props;
    const range = this.calculateRange(selectedProducts);
    let products;
    if (productsList[0] != null && range[1] <= productsList.length) {
      products = this.mapProductsFromRange(range, productsList);
    }


    return (
      <>
        <div id="product_field">

          <SearchBar />

          <div id="nav__block__product">


            {this.shouldArrowRender('up', 'category')}
            <aside id="category__sidebar">
              <ul id="category__selection">
                {categoryList.map(category => (
                  <Category key={category.id} name={category.name} />
                ))}
              </ul>
            </aside>
            {this.shouldArrowRender('down', 'category')}

            <div id="product__block">
              {this.shouldArrowRender('up', 'products')}
              <ul id="product__selection">

                {products !== undefined ? products.map(product => (
                  <Product
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    stocks={product.stocks}
                  />
                )) : null}
              </ul>
              {this.shouldArrowRender('down', 'products')}
            </div>
          </div>
        </div>
      </>

    );
  }
}


export default Products;
