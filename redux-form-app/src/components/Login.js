import React from "react";
import InputField from "./InputField";

class Login extends React.Component {
    render() {
        return (
            <div className="container-login">
                <div className="login-form">
                    <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div>

                    <InputField type="email" placeholder="ex: c2ctechhub@gmail.com" label="Email" />
                    <InputField type="password" placeholder="Enter your password" label="Password" />
                    <a href="/abcd">{"Forgot password?"}</a>
                    <button className="btn btn-primary">Sign in</button>
                </div>
                <div className="link-sign-up">
                    <p>{"Don't have account?"}<a href="#">{"Sign up"}</a></p>
                </div>
            </div>
        );
    }
}
export default Login;