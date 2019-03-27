/**
 * Initial State
 */
const initialState = {
  products: [],
  value: '',
};

/**
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';
export const LOADING = 'LOADING';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';
export const USER_RECEIVED = 'USER_RECEIVED';

export const CONNECTING_USER = 'CONNECTING_USER';
export const CONNECT_USER = 'CONNECT_USER';

/**
 * Reducer
 */

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case CHANGE_INPUT:
      return {
        ...state,
        [action.id]: action.value,
      };

    case CONNECTING_USER:
      return {
        user_loading: true,
      };

    case CONNECT_USER:
      return {
        ...state,
        connected: true,
        username: action.username,
        status: action.status,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */


// Input actions

export const changeInput = (value, id) => ({
  type: CHANGE_INPUT,
  value,
  id,
});


// User actions

export const connectingUser = () => ({
  type: CONNECTING_USER,
});

export const connectUser = ({ username, status }) => ({
  type: CONNECT_USER,
  username,
  status,
});


// Products actions

export const productsReceived = products => ({
  type: PRODUCTS_RECEIVED,
  results: products,
});


/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
