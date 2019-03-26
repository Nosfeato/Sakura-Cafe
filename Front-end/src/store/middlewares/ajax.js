import axios from 'axios';


import { productsReceived, LOADING } from 'src/store/reducer';


const ajaxProducts = store => next => (action) => {

  switch (action.type) {

    case LOADING: {
      console.log('LOADING PRODUCTS');

      const state = store.getState();

      axios.post('http://localhost:3000/words', { products: state.products })
        .then((response) => {
          console.log('succès');

          store.dispatch(productsReceived(response.data));
        })
        .catch(() => {
          console.error('echec');
        });

      break;
    }

    default:
      break;
  }

  // Passer au voisin
  next(action);
};

export default ajaxProducts;
