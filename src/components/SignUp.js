import React from 'react';
import {Link} from 'react-router-dom';
import Input from './Input';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {Field, reduxForm, focus} from 'redux-form';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import './styles/SignUp.css';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class SignUp extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      show: true
    };

    this.showSignUp = this.showSignUp.bind(this);
    this.hideSignUp = this.hideSignUp.bind(this);
  }

  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  hideSignUp = () => {
    if(!this.state.show) {
      this.setState({
        show: false
      });
    } else {
      this.setState({
        show: true
      })
    }   
  }

  showSignUp = () => {
    this.setState({
      show: true
    });
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
          <div className="form-error" aria-live="polite">
              {this.props.error}
          </div>
      );
    }
    return (
      <div className={this.state.show ? "showSignUpForm" : ""}>
        <div className="signup-modal">
          <h2 className="sign-up-title">Try Contactualize Now</h2>
          <form
            className="signup-form"
            onSubmit={this.props.handleSubmit(values =>
              this.onSubmit(values)
            )}>
            <label className='signup-label' htmlFor="firstName">First name</label>
            <Field className='signup-field' component={Input} type="text" name="firstName" />
            <label className='signup-label' htmlFor="lastName">Last name</label>
            <Field className='signup-field' component={Input} type="text" name="lastName" />
            <label className='signup-label' htmlFor="username">Username</label>
            <Field
              className='signup-field'
              component={Input}
              type="text"
              name="new-username"
              validate={[required, nonEmpty, isTrimmed]}
            />
            <label className='signup-label' htmlFor="password">Password</label>
            <Field
              className='signup-field'
              component={Input}
              type="new-password"
              name="new-password"
              validate={[required, passwordLength, isTrimmed]}
            />
            <label className='signup-label' htmlFor="passwordConfirm">Confirm password</label>
            <Field
              className='signup-password-confirm'
              component={Input}
              type="passwordConfirm"
              name="passwordConfirm"
              validate={[required, nonEmpty, matchesPassword]}
            />
            <button
              className="landingpage-signup-button"
              type="submit"
              disabled={this.props.pristine || this.props.submitting}>
              Register
            </button>
            <div className="signup-button">
            <p className="lp-text">Already have an account?</p><button className="landingpage-button" ><Link className="account-link" to={'/login'}>Account</Link></button>
            </div>  
          </form>
        </div>
      </div>
    );
  }
}

//<button className="landingpage-button" type='submit'>Account</button>

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
      dispatch(focus('registration', Object.keys(errors)[0]))
})(SignUp);