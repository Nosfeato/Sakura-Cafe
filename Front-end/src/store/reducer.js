  /**
 * Initial State
 */
const initialState = {
  value: '',
  news_selection: 0,
  products_selection: 0,
  newsList: ['hi', 'patate', 'mynameisbabar', 'hey', 'Sindy', 'Logan'],
  productsList: [
    {
      id: 1,
      name: 'Product1',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 2,
      name: 'Product2',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 3,
      name: 'Product3',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 4,
      name: 'Product4',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 5,
      name: 'Product5',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 6,
      name: 'Product6',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 7,
      name: 'Product7',
      description: "J'aime les patates et le fromage",
    },
    {
      id: 8,
      name: 'Product8',
      description: "J'aime les patates et le fromage",
    },
  ],
  cart_list: [],
};

/**
 * Types
 */

const CHANGE_INPUT = 'CHANGE_INPUT';

export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';
export const CHANGE_VIEW = 'CHANGE_VIEW';

export const CONNECTING_USER = 'CONNECTING_USER';
export const CONNECT_USER = 'CONNECT_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';


export const GET_PRODUCT_CATEGORIES = 'GET_PRODUCT_CATEGORIES';
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';

export const REGISTER_USER = 'REGISTER_USER';

export const ADD_TO_CART = 'ADD_TO_CART';


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
        newsList: [action.news],
        loading_news: false,
      };

    case CHANGE_VIEW:
      return {
        ...state,
        [action.id]: action.int,
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

    case GET_PRODUCT_CATEGORIES:
      return {
        ...state,
        loading_products_categories: true,
      };

    case CATEGORIES_RECEIVED:
      return {
        ...state,
        categoriesLIst: [action.categories],
        loading_products_categories: false,
      };

    case GET_PRODUCTS_LIST:
      return {
        ...state,
        loading_products: true,
      };

    case PRODUCTS_RECEIVED:
      return {
        ...state,
        productsList: action.products,
        loading_products: false,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart_list: [].push(action.name, action.description),
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

export const changeView = (int, id) => ({
  type: CHANGE_VIEW,
  int,
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

export const registerUser = () => ({
  type: REGISTER_USER,
});

// Products actions

export const getProductsCategories = () => ({
  type: GET_PRODUCT_CATEGORIES,
});

export const categoriesReceived = categories => ({
  type: categoriesReceived,
  categories,
});

export const getProductsList = () => ({
  type: GET_PRODUCTS_LIST,
});

export const productsReceived = products => ({
  type: PRODUCTS_RECEIVED,
  products,
});

export const disconnect = () => ({
  type: DISCONNECT_USER,
});

export const addToCart = (name, description) => ({
  type: ADD_TO_CART,
  name,
  description,
});

/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
