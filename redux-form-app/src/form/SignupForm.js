import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'

const SignupForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="email" />
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
                <label htmlFor="cf-password">Confirm your password</label>
                <Field name="cf-password" component="input" type="password" />
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            <div>
                <p>{"Already have account?"}<a href="/login">{"Sign in"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'sign-up' })(SignupForm)