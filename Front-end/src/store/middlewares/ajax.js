import axios from 'axios';


import { CONNECTING_USER, connectUser, REGISTER_USER, GET_PRODUCTS_LIST, GET_PRODUCTS_CATEGORIES, categoriesReceived, productsReceived, GET_NEWS_LIST, newsReceived } from 'src/store/reducer';


const ajaxMiddleware = store => next => (action) => {

  switch (action.type) {

    case GET_NEWS_LIST: {
      axios.get('http://localhost/Apotheose/Project/sakura-cafe/Back-end/wp-json/wp/v2/posts/news')
        .then((response) => {
          console.log('News list successfully loaded');


          const filteredResponse = response.data.map(news => ({
            id: news.id,
            title: news.title,
            description: news.content,
            image: news.image,
            date: news.date,
          }));

          store.dispatch(newsReceived(filteredResponse));
        })
        .catch(() => {
          console.error('Could not load news list');
        });
      break;
    }


    case CONNECTING_USER: {
      const state = store.getState();
      const username = state.signin__username__input;
      const password = state.signin__password__input;

      axios.get(`http://localhost/Apotheose/Project/sakura-cafe/Back-end/wp-json/wp/v2/users/connect?username=${username}&password=${password}`)
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
      const username = state.signup__username__input;
      const email = state.signup__email__input;
      const password = state.signup__password__input;

      axios.post(`http://localhost/Apotheose/Project/sakura-cafe/Back-end/wp-json/wp/v2/users/register?username=${username}&email=${email}&password=${password}`)
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
      axios.get('http://localhost/Apotheose/Project/sakura-cafe/Back-end/wp-json/wp/v2/posts/product')
        .then((response) => {
          console.log('Product list successfully loaded');

          const filteredResponse = response.data.map(product => ({
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            stocks: product.stocks,
          }));

          store.dispatch(productsReceived(filteredResponse));
        })
        .catch(() => {
          console.error('Could not load product list');
        });
      break;
    }


    case GET_PRODUCTS_CATEGORIES: {
      axios.get('http://localhost/Apotheose/Project/sakura-cafe/Back-end/wp-json/wp/v2/posts/categories')
        .then((response) => {
          console.log('Product categories successfully loaded');

          const filteredResponse = response.data.map(category => ({
            id: category.id,
            name: category.name,
          }));

          store.dispatch(categoriesReceived(filteredResponse));
        })
        .catch(() => {
          console.error('Could not load product categories');
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
