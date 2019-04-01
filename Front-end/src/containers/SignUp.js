/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import { registerUser, changeInput } from 'src/store/reducer';
import SignUp from 'src/components/SignUp';


// Action Creators


const mapStateToProps = state => ({
  usernameValue: state.signup__username__input,
  emailValue: state.signup__email__input,
  passwordValue: state.signup__password__input,
  confirmPasswordValue: state.signup__password__confirm__input,
});

const mapDispatchToProps = dispatch => ({
  changeInput: (value, id) => {
    dispatch(changeInput(value, id));
  },
  registerUser: () => {
    dispatch(registerUser());
  },
});

// Container
const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

/**
 * Export
 */
export default SignUpContainer;
