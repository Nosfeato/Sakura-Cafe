/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import SignUp from 'src/components/Header/SignUp';

// Action Creators
import { changeInput, registerUser } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  usernameValue: state.signup__username__input,
  emailValue: state.signup__email__input,
  passwordValue: state.signup__password__input,
  confirmPasswordValue: state.signup__password__confirm__input,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  changeInput: (value, id) => {
    dispatch(changeInput(value, id));
  },
  tryRegisteringUser: () => {
    dispatch(registerUser());
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default SignUpContainer;
