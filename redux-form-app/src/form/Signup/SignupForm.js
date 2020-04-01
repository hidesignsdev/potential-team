import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css'

const SignupForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="inputFName">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <div className="inputLName">
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <div className="inputEmail">
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
            </div>
            <div className="inputPass">
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <div className="inputCPass">
                <label htmlFor="cf-password">Confirm your password</label>
                <Field name="cf-password" component="input" type="password" />
            </div>
            <button type="submit" className="button">Sign Up</button>
            <div className="link-sign-up">
                <p>{"Already have account?"}<a href="#">{"Sign in"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'sign-up' })(SignupForm)