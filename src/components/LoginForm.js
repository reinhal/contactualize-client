import React, {Fragment} from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {Redirect} from 'react-router-dom';
import Input from './Input';
import Title from './Title';
import {login} from '../actions/auth';
import './styles/LoginForm.css';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render(props) {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        if (props === null) {
            return (
                <Fragment>
                    <Title />
                    <div className="login-page">
                        <div className="login-div display">
                            <div className="login-modal">
                                <h2 className="login-title">Log In</h2>
                                <form
                                    className="login-form"
                                    onSubmit={this.props.handleSubmit(values =>
                                        this.onSubmit(values)
                                    )}>
                                    {error}
                                    <label htmlFor="username">Username</label>
                                    <Field
                                        component={Input}
                                        type="text"
                                        name="username"
                                        id="username"
                                        validate={[required, nonEmpty]}
                                    />
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        component={Input}
                                        type="password"
                                        name="password"
                                        id="password"
                                        validate={[required, nonEmpty]}
                                    />
                                    <button className="login-button" disabled={this.props.pristine || this.props.submitting}>
                                        Log in
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )} else {
            return <Redirect to="/home" />;
        }
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
