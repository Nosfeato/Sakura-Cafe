/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ProductInfo from 'src/components/Main/Cart/ProductInfo';
import { removeFromCart } from 'src/store/reducer';

// Action Creators

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (index) => {
    dispatch(removeFromCart(index));
  },
});


const ProductInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductInfo);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default ProductInfoContainer;
