import React from "react";
import { Field, reduxForm } from "redux-form";

class Login extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <form onSubmit={handleSubmit}>

                    <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div>
                    <div className="login-form">
                        <label htmlFor="email">Email</label>
                        <Field name="email" component="input" type="email" />
                        <label htmlFor="password">Password</label>
                        <Field name="password" component="input" type="password" />
                        <a href="/abcd">{"Forgot password?"}</a>
                        <button className="btn btn-primary" type="submit">Sign in</button>
                    </div>
                    <div className="link-sign-up">
                        <p>{"Don't have account?"}<a href="#">{" Sign up"}</a></p>
                    </div>
                </form>
            </div>

        );
    }
}
Login = reduxForm({
    form: 'login'
})(Login)
export default Login;