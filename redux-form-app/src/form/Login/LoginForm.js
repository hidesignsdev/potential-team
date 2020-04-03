import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
                <a href="/abcd">{"Forgot password?"}</a>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
            <div>
                <p>{"Don't have account?"}<a href="/sign-up">{"Sign up"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'log-in' })(LoginForm)