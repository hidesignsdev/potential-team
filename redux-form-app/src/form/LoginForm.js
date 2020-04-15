import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
import { required } from "./validate";
import InputField from "./InputField";

const LoginForm = props => {
    const { handleSubmit, loading, messageErr } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <label htmlFor="username">Email</label>
                <Field name="username" component={InputField} type="email" validate={required} />
                <label htmlFor="password">Password
                <a className="fg-pass" href="/sign-up">Forgot password?
                </a>
                </label>
                <Field name="password" component={InputField} type="password" validate={required} />
                {/* check erro and loading */}
                {messageErr ? (<span className="alert-error">{messageErr}</span>) : null}
                {loading ?
                    <button className="btn btn-primary" disabled>
                        <span className="spinner-border spinner-border-sm"></span>
                Loading..
                </button> : <button type="submit" className="btn btn-primary">Sign In</button>
                }
                
            </div>
            <div>
                <p>{"Don't have account?"}<a href="/sign-up">{" Sign up"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'logIn' })(LoginForm)