import React from 'react';
import PropTypes from 'prop-types';

import Product from 'src/components/Main/Products/Product';
import './products.scss';
import SearchBar from 'src/components/Main/Products/Searchbar';
import Button from 'src/components/Main/Products/Button';
import Category from 'src/components/Main/Products/Category';
import Arrow from 'src/containers/Arrow';

class Products extends React.Component {
  // quand mon composant est chargé la première fois (pas update donc)
  componentDidMount = () => { 
    const { getProducts, getCategories } = this.props;
    getCategories();
    getProducts();
  }

  // choix de chargement ou non de chaques flèches
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

  // une liste d'exemple en attendant requête ajax pour catégories , donc temporaire après je vire
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

    // va chercher ProductsList (la liste de produit de ma requête ajax) dans les props (merci container Products)
    const { productsList } = this.props;

    return (
      <>
        <Button />
        <div id="product_field">
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
              {/* Pour chaque produit dans ma liste de produit créé un composant Produit avec X Y Z */}
              {productsList.map(product => (
                <Product
                  key={product.id}
                  name={product.name}
                  description={product.description}
                />
              ))}
              {this.shouldArrowRender('down', 'products')}
            </ul>
          </div>
        </div>
      </>

    );
  }
}

export default Products;
