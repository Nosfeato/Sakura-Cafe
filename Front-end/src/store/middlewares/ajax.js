import axios from 'axios';


import { CONNECTING_USER, connectUser } from 'src/store/reducer';


const ajaxUser = store => next => (action) => {

  switch (action.type) {

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
    default:
      break;
  }

  // Passer au voisin
  next(action);
};

export default ajaxUser;

/*
config: {
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
} */
