import React from 'react';
//import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
import InputField from "./InputField";
import { required, validateEmail } from "./validate";

import { Form, Field } from 'formik';

const SignupForm = props => {
    const { loading, messageErr} = props;
    console.log("sign up", props);
    return (
        <Form className="container">
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component={InputField} validate={required}/>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component={InputField} validate={required}/>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" component={InputField} validate={validateEmail}/>
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" component={InputField}/>
                <label htmlFor="cfPassword">Confirm your password</label>
                <Field name="cfPassword" type="password" component={InputField}/>
                {/* check erro and loading */}
                <span className="alert-error">{messageErr ? messageErr : ""}</span>
                <button type="submit" className="btn btn-primary">
                    <span className={loading ? "spinner-border spinner-border-sm" : ""}></span>
                    {loading ? "Loading..." : "Sign Up"}
                </button>
                <div>
                    <p>{"Already have account?"}<a href="/login">{"Sign in"}</a></p>
                </div>
            </div>

        </Form>
    )
}

export default SignupForm;