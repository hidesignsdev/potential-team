import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
import InputField from "./InputField";
import { required } from "./validate";


const SignupForm = props => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component={InputField} type="text" validate={required} />
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component={InputField} type="text" validate={required} />
                <label htmlFor="email">Email</label>
                <Field name="email" component={InputField} type="email" validate={required} />
                <label htmlFor="password">Password</label>
                <Field name="password" component={InputField} type="password" />
                <label htmlFor="cfPassword">Confirm your password</label>
                <Field name="cfPassword" component={InputField} type="password" />
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            <div>
                <p>{"Already have account?"}<a href="/login">{"Sign in"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'signUp' })(SignupForm)