import React from 'react';
//import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
//import { required } from "./validate";
//import InputField from "./InputField";

import { Form, Field } from 'formik';


const LoginForm = props => {
    const { loading, messageErr } = props;
    return (
        <Form className="container">
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <label htmlFor="username">Email</label>
                <Field name="username" type="email" />
                <label htmlFor="password">Password
                <a className="fg-pass" href="/sign-up">Forgot password?
                </a>
                </label>
                <Field name="password" type="password" />
                {/* check erro and loading */}
                <span className="alert-error">{messageErr ? messageErr : ""}</span>
                <button type="submit" className="btn btn-primary">
                    <span className={loading ? "spinner-border spinner-border-sm" : ""}></span>
                    {loading ? "Loading..." : "Sign In"}
                </button>
                <div>
                    <p>{"Don't have account?"}<a href="/sign-up">{" Sign up"}</a></p>
                </div>
            </div>
        </Form>
    )
}

export default LoginForm;