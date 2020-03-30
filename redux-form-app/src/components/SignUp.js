import React from "react";
import InputField from "./InputField";

class SignUp extends React.Component {
    render() {
        return (
            <div className="container-login">
                <div className="login-form">
                    <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div>

                    <InputField type="text" placeholder="Enter your first name" label="First name" />
                    <InputField type="text" placeholder="Enter your last name" label="Last name" />
                    <InputField type="email" placeholder="ex: c2ctechhub@gmail.com" label="Email" />
                    <InputField type="password" placeholder="Enter your password" label="Password" />
                    <InputField type="password" placeholder="Re enter your password" label="Confirm in your password" />
                    <button className="btn btn-primary">Sign Up</button>
                </div>
                <div className="link-sign-up">
                    <p>{"Already have account?"}<a href="#">{"Sign in"}</a></p>
                </div>
            </div>
        );
    }
}
export default SignUp;