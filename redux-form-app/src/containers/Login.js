import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";
import { Formik } from "formik";
import Image from "../image/iconReact.png";
import { required, validateEmail } from "../components/validate";
import InputField from "../components/InputField";

import { Form, Field } from "formik";
//import _ from "lodash";

class Login extends React.Component {
  submit = (values) => {
    const { logIn } = this.props;
    logIn(values);
  };
  render() {
    const { loading, messageErr } = this.props.logInReducer;
    const initialValues = {
      username: "",
      password: "",
    };
    const { history } = this.props;
    const { success } = this.props.logInReducer;
    if (success === true) {
      history.push("/account");
    }
    return (
      <Formik initialValues={initialValues} onSubmit={this.submit}>
        {(formProps) => {
          return (
            <Form className="container">
              <div className="form-field">
                <img className="square" src={Image} alt=""/>
                <Field
                  name="username"
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
                  forgotPassword={true}
                  validate={required}
                />
                {/* check error and loading */}
                <span className="alert-error">
                  {messageErr ? messageErr : ""}
                </span>
                <button type="submit" className="btn btn-primary">
                  <span
                    className={
                      loading ? "spinner-border spinner-border-sm" : ""
                    }
                  ></span>
                  {loading ? "Loading..." : "Sign In"}
                </button>
                <div>
                  <p>
                    {"Don't have account?"}
                    <a href="/sign-up">{" Sign up"}</a>
                  </p>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return { logInReducer: state.logInReducer };
};
const mapDispatchToProps = (dispatch) => {
  return { logIn: (user) => dispatch(logIn(user)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
