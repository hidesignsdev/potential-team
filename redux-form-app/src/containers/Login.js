import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";
import { Formik } from 'formik';
import Image from '../image/iconReact.png'
import { required, validateEmail } from "../components/validate";
import InputField from '../components/InputField';

import { Form, Field } from 'formik';
//import _ from "lodash";

class Login extends React.Component {
    submit = values => {
        const { logIn } = this.props;
        logIn(values);
    }
    render() {
        const { loading, messageErr } = this.props.logInReducer;
        const initialValues = {
            username: '',
            password: ''
        }
        const { history } = this.props;
        const { success } = this.props.logInReducer;
        if (success === true) {
            history.push("/account")
        }
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.submit}
            >
                <Form className="container">
                    <div className="form-field">
                        <img className="square" src={Image} alt=""></img>
                        <label htmlFor="username">Email</label>
                        <Field name="username" type="email" component={InputField} validate={validateEmail} />
                        <label htmlFor="password">Password
                <a className="fg-pass" href="/sign-up">Forgot password?
                </a>
                        </label>
                        <Field name="password" type="password" component={InputField} validate={required} />
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
            </Formik>
        );
    }
}

const mapStatetoProps = (state) => {
    return { logInReducer: state.logInReducer }
}
const mapDispatchToProps = (dispatch) => {
    return { logIn: (user) => dispatch(logIn(user)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(Login));