import React from 'react';
import PropTypes from 'prop-types';

import Product from 'src/components/Products/Product';
import './products.scss';
import SearchBar from 'src/components/Products/Searchbar';
import Button from 'src/components/Products/Button';
import Category from 'src/components/Products/Category';

class Products extends React.Component {

  componentDidMount = () => {
    const { getProducts, getCategories } = this.props;

    getCategories();
    getProducts();
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
            <ul id="list">
              {categoryList.map(category => (
                <Category key={category.id} name={category.name} />
              ))}
            </ul>
          </aside>
          <ul id="productlist">
            <Product />
          </ul>
        </div>
      </>

    );
  }
}


export default Products;
