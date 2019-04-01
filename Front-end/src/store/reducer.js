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

export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

export const CONNECTING_USER = 'CONNECTING_USER';
export const CONNECT_USER = 'CONNECT_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';

export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';

export const REGISTER_USER = 'REGISTER_USER';


/**
 * Reducer
 */

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    /**
     * @general actions
     */
    case CHANGE_INPUT:
      return {
        ...state,
        [action.id]: action.value,
      };


    /**
     * @News actions
     */
    case GET_NEWS_LIST:
      return {
        ...state,
        loading_news: true,
      };

    case NEWS_RECEIVED:
      return {
        ...state,
        news: [action.news],
        loading_news: false,
      };

    /**
     * @User actions
     */
    case CONNECTING_USER:
      return {
        ...state,
        loading_user: true,
      };


    case CONNECT_USER:
      return {
        ...state,
        connected: true,
        username: action.username,
        status: action.status,
        loading_user: false,
      };

    case REGISTER_USER:
      return {
        ...state,
        loading_user: true,
      };

    case DISCONNECT_USER:
      return {
        ...state,
        username: null,
        status: null,
        connected: false,
      };

    /**
     * @Product actions
     */
    case GET_PRODUCTS_LIST:
      return {
        loading_products: true,
      };

    case PRODUCTS_RECEIVED:
      return {
        ...state,
        products: [action.products],
        loading_products: false,
      };


      /**
       * default action
       */
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

// News actions

export const getNews = () => ({
  type: GET_NEWS_LIST,
});

export const newsReceived = news => ({
  type: NEWS_RECEIVED,
  news,
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

export const registerUser = () => ({
  type: REGISTER_USER,
});

// Products actions

export const getProductsList = () => ({
  type: GET_PRODUCTS_LIST,
});

export const productsReceived = products => ({
  type: PRODUCTS_RECEIVED,
  results: products,
});

export const disconnect = () => ({
  type: DISCONNECT_USER,
});


/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
