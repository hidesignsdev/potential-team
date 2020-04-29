import React from "react";
import { withRouter } from "react-router-dom";
import { required, validateEmail, validateSignup } from "../components/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";
import Image from '../image/iconReact.png'
import InputField from "../components/InputField";
import { Formik, Form, Field } from 'formik';

class SignUp extends React.Component {

    submit = values => {
        const { signUp } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        signUp(infor);
    }
    render() {
        const { loading, messageErr } = this.props.signUpReducer;
        const initialValues = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cfPassword: '',
        }
        const { history } = this.props;
        const { success } = this.props.signUpReducer;
        console.log("sign up", this.props.signUpReducer)
        if (success === true) {
            history.push("/personal-info");
        }
        return (
            <Formik
                initialValues={initialValues}
                // validationSchema={SignUpSchema}
                validate={validateSignup}
                onSubmit={this.submit}
            >
                <Form className="container">
                    <div className="form-field">
                        <img className="square" src={Image} alt=""></img>
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" component={InputField} validate={required} />
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" component={InputField} validate={required} />
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" component={InputField} validate={validateEmail} />
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" component={InputField} />
                        <label htmlFor="cfPassword">Confirm your password</label>
                        <Field name="cfPassword" type="password" component={InputField} />
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
            </Formik>
        );
    }
}
const mapStatetoProps = (state) => {
    return { signUpReducer: state.signUpReducer }
}
const mapDispatchToProps = (dispatch) => {
    return { signUp: (infor) => dispatch(signUp(infor)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(SignUp));