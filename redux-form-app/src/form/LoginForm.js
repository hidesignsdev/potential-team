import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
                <label htmlFor="password">Password
                <a className="fg-pass" href="/sign-up">Forgot password?
                </a>
                </label>
                <Field name="password" component="input" type="password" />
                <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <div>
                <p>{"Don't have account?"}<a href="/sign-up">{" Sign up"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'log-in' })(LoginForm)