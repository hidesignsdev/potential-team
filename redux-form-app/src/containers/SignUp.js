import React from "react";
import { withRouter } from "react-router-dom";
import {
  required,
  validateEmail,
  validateSignup,
} from "../components/validate";
import _ from "lodash";
import { signUp } from "../actions/index";
import { connect } from "react-redux";
import Image from "../image/iconReact.png";
import InputField from "../components/InputField";
import { Formik, Form, Field } from "formik";

class SignUp extends React.Component {
  submit = (values) => {
    const { signUp } = this.props;
    // remove cfPassword
    const infor = _.pick(values, [
      "firstName",
      "lastName",
      "email",
      "password",
    ]);
    signUp(infor);
  };
  render() {
    const { loading, messageErr } = this.props.signUpReducer;
    const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      cfPassword: "",
    };
    const { history } = this.props;
    const { success } = this.props.signUpReducer;
    console.log("sign up", this.props.signUpReducer);
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
            <Field
              name="firstName"
              component={InputField}
              label="First Name"
              type="text"
              validate={required}
            />
            <Field
              name="lastName"
              component={InputField}
              label="Last Name"
              type="text"
              validate={required}
            />
            <Field
              name="email"
              component={InputField}
              label="Email"
              type="email"
              validate={validateEmail}
            />
            <Field
              name="password"
              component={InputField}
              label="Password"
              type="password"
            />
            <Field
              name="cfPassword"
              component={InputField}
              label="Confirm your password"
              type="password"
            />
            {/* check error and loading */}
            <span className="alert-error">{messageErr ? messageErr : ""}</span>
            <button type="submit" className="btn btn-primary">
              <span
                className={loading ? "spinner-border spinner-border-sm" : ""}
              ></span>
              {loading ? "Loading..." : "Sign Up"}
            </button>
            <div>
              <p>
                {"Already have account?"}
                <a href="/login">{"Sign in"}</a>
              </p>
            </div>
          </div>
        </Form>
      </Formik>
    );
  }
}
const mapStateToProps = (state) => {
  return { signUpReducer: state.signUpReducer };
};
const mapDispatchToProps = (dispatch) => {
  return { signUp: (infor) => dispatch(signUp(infor)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
