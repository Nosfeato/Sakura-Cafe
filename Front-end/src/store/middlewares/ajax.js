import axios from 'axios';


import { CONNECTING_USER, connectUser, GET_PRODUCTS_LIST, productsReceived, GET_NEWS_LIST, newsReceived, REGISTER_USER } from 'src/store/reducer';

const ajaxMiddleware = store => next => (action) => {

  switch (action.type) {

    case GET_NEWS_LIST: {
      axios.post('http://localhost/Oclock/sakura-cafe/Back-end/wp-json/wp/v2/posts/news')
        .then((response) => {
          console.log('News list successfully loaded');

          store.dispatch(newsReceived(response.data));
        })
        .catch(() => {
          console.error('Could not load news list');
        });
      break;
    }


    case CONNECTING_USER: {
      const state = store.getState();

      axios.post('http://localhost/Oclock/sakura-cafe/Back-end/wp-json/wp/v2/users/connect', { username: state.signin__username__input, password: state.signin__password__input })
        .then((response) => {
          console.log('User found in database');

          store.dispatch(connectUser(response.data));
        })
        .catch(() => {
          console.error('Could not find user in database');
        });
      break;
    }

    case GET_PRODUCTS_LIST: {
      axios.get('http://localhost/Oclock/sakura-cafe/Back-end/wp-json/wp/v2/product')
        .then((response) => {
          console.log('Product list successfully loaded');
          const filteredResponse = response.data.map(product => ({
            id: product.id,
            name: product.title.rendered,
            description: product.excerpt.rendered,
          }));
          store.dispatch(productsReceived(filteredResponse));
        })
        .catch(() => {
          console.error('Could not load product list');
        });
      break;
    }

    case REGISTER_USER: {
      const state = store.getState();

      axios.post('http://localhost/Oclock/sakura-cafe/Back-end/wp-json/wp/v2/users/register', state.signup__username__input, state.signup__email__input, state.signup__password__input)
        .then((response) => {
          console.log('New user added to database');
          store.dispatch(connectUser(response.data));
        })
        .catch(() => {
          console.error('New user creation failed');
        });
      break;
    }


    default:
      break;
  }

  // Passer au voisin
  next(action);
};

export default ajaxMiddleware;

/*
config: {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
} */
