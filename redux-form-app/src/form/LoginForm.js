import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <div>
                <a href="/abcd">{"Forgot password?"}</a>
            </div>
            <button type="submit">Sign In</button>
            <div className="link-sign-up">
                <p>{"Don't have account?"}<a href="#">{"Sign up"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'log-in' })(LoginForm)