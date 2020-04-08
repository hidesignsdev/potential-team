import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
import InputField from "./InputField";
import { required } from "./validate";

async function submitSignUp(data) {
    try {
        let response = await fetch('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
                'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}



const SignupForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(submitSignUp)}>
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
                {/* <Field name="cfPassword" component={InputField} type="password" /> */}
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
            <div>
                <p>{"Already have account?"}<a href="/login">{"Sign in"}</a></p>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'signUp' })(SignupForm)