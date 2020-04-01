import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css'

const LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label htmlFor="email">Email</label>
            </div>
            <div>
                <Field name="email" component="input" type="email" />
            </div>
            <div className="inputpass">
                <label htmlFor="password">Password</label>
                <a href="#" className="forgotpass">Forgot password?</a>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit" className="button">Sign In</button>
            <div className="link-sign-up">
                <p>Don't have account?<a href="#"> Sign up</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'log-in' })(LoginForm)