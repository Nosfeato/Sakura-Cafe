/**
 * Initial State
 */
const initialState = {
  value: '',
  news_selection: 0,
  products_selection: 0,
  newsList: [{}],
  productsList: [],
  categoriesList: [],
  cart_list: [],
  searchbar__input: '',
  connected: true,
};

/**
 * Types
 */

const CHANGE_INPUT = 'CHANGE_INPUT';

export const GET_NEWS_LIST = 'GET_NEWS_LIST';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';
export const CHANGE_VIEW = 'CHANGE_VIEW';

export const CONNECTING_USER = 'CONNECTING_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const CONNECT_USER = 'CONNECT_USER';
export const DISCONNECT_USER = 'DISCONNECT_USER';

export const GET_PRODUCTS_CATEGORIES = 'GET_PRODUCTS_CATEGORIES';
export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const PRODUCTS_RECEIVED = 'PRODUCTS_RECEIVED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


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
        newsList: action.news,
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

    case REGISTER_USER:
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

    case GET_PRODUCTS_CATEGORIES:
      return {
        ...state,
        loading_products_categories: true,
      };

    case CATEGORIES_RECEIVED:
      return {
        ...state,
        categoriesList: action.categories,
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
        cart_list: state.cart_list.concat({ name: action.name, description: action.description, image: action.image, id: action.id, price: action.price, amount: action.amount }),
      };

    case REMOVE_FROM_CART:
      state.cart_list.splice(action.index, 1);
      return {
        ...state,
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

export const disconnect = () => ({
  type: DISCONNECT_USER,
});

// Products actions

export const getProductsCategories = () => ({
  type: GET_PRODUCTS_CATEGORIES,
});

export const categoriesReceived = categories => ({
  type: CATEGORIES_RECEIVED,
  categories,
});

export const getProductsList = () => ({
  type: GET_PRODUCTS_LIST,
});

export const productsReceived = products => ({
  type: PRODUCTS_RECEIVED,
  products,
});

export const addToCart = (name, description, image, price, amount) => ({
  type: ADD_TO_CART,
  name,
  description,
  image,
  price,
  amount,
});

export const removeFromCart = index => ({
  type: REMOVE_FROM_CART,
  index,
});
/**
 * Selectors
 */


/**
 * Export
 */
export default reducer;
