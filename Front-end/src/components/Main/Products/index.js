import React from 'react';
import PropTypes from 'prop-types';

import Product from 'src/components/Main/Products/Product';
import './products.scss';
import SearchBar from 'src/components/Main/Products/Searchbar';
import Button from 'src/components/Main/Products/Button';
import Category from 'src/components/Main/Products/Category';
import Arrow from 'src/containers/Arrow';

class Products extends React.Component {

  componentDidMount = () => {
    const { getProducts, getCategories } = this.props;

    getCategories();
    getProducts();
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
      if (arrow === 'down' && selectedProducts < listLength) {
        const jsx = <Arrow selectedArrowModule="down" listLength={listLength} selection={selectedProducts} data={name} />;
        return jsx;
      }
    }
    // else if (type === 'category') {
    //   const { categoryList, selectedCategories } = this.props;

    //   const listLength = categoryList.length;
    //   console.log(name);
    //   if (arrow === 'up' && selectedCategories > 0) {
    //     const jsx = <Arrow selectedArrowModule="up" listLength={listLength} selection={selectedCategories} data={name} />;
    //     return jsx;
    //   }
    //   if (arrow === 'down' && selectedCategories < listLength) {
    //     const jsx = <Arrow selectedArrowModule="down" listLength={listLength} selection={selectedCategories} data={name} />;
    //     return jsx;
    //   }
    // }

  }

  render() {
    const categoryList = [
      {
        name: 'Green Tea',
        id: 'green',
      },
      {
        name: 'White Tea',
        id: 'white',
      },
      {
        name: 'Black Tea',
        id: 'black',
      },
      {
        name: 'Fruity Tea',
        id: 'fruity',
      },
    ];

    return (
      <>
        <Button />
        <SearchBar />
        <div id="nav__block__product">
          <aside id="sidebar">
            {this.shouldArrowRender('up', 'category')}
            <ul id="category_selection">
              {categoryList.map(category => (
                <Category key={category.id} name={category.name} />
              ))}
            </ul>
            {this.shouldArrowRender('down', 'category')}
          </aside>
          <ul id="product_selection">
            {this.shouldArrowRender('up', 'products')}
            <Product />
            {this.shouldArrowRender('down', 'products')}
          </ul>
        </div>
      </>

    );
  }
}


export default Products;
