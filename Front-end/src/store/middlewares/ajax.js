import axios from 'axios';


import { CONNECTING_USER, connectUser, REGISTER_USER, GET_PRODUCTS_LIST, productsReceived, GET_NEWS_LIST, newsReceived } from 'src/store/reducer';

const ajaxMiddleware = store => next => (action) => {

  switch (action.type) {

    case GET_NEWS_LIST: {
      axios.post('http://localhost/wp-json/wp/v2/posts/news')
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

      axios.post('http://localhost/wp-json/wp/v2/connect', { username: state.signin__username__input, password: state.signin__password__input })
        .then((response) => {
          console.log('User found in database');

          store.dispatch(connectUser(response.data));
        })
        .catch(() => {
          console.error('Could not find user in database');
        });
      break;
    }

    case REGISTER_USER: {
      const state = store.getState();

      axios.post('http://localhost/wp-json/wp/v2/register', { username: state.signup__username__input, email: state.signup__email__input, password: state.signup__password__input })
        .then((response) => {
          console.log('Added user to database');

          store.dispatch(connectUser(response.data));
        })
        .catch(() => {
          console.error('Could not create a new user');
        });
      break;
    }

    case GET_PRODUCTS_LIST: {
      axios.post('http://localhost/wp-json/wp/v2/posts/products')
        .then((response) => {
          console.log('Product list successfully loaded');

          store.dispatch(productsReceived(response.data));
        })
        .catch(() => {
          console.error('Could not load product list');
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
