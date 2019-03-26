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

    case LOADING:
      return {
        ...state,
        status: 'loading',
      };

    case USER_RECEIVED:
      return {
        ...state,
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
export const changeInput = (value, id) => ({
  type: CHANGE_INPUT,
  value,
  id,
});

export const toLoading = () => ({
  type: LOADING,
});

export const productsReceived = products => ({
  type: PRODUCTS_RECEIVED,
  results: products,
});

export const userReceived = (username, status) => ({
  type: USER_RECEIVED,
  username,
  status,
});


/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
