import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile } from "../actions/index";
import _ from "lodash";
import moment from "moment";
import { required, validateGender } from "../components/validate";
import InputField from "../components/InputField";
import ImageUpload from "./ImageUpload";
import { Formik, Form, Field, ErrorMessage } from "formik";

class PersonalInfo extends React.Component {
  submit = (values) => {
    const { updateProfile } = this.props;
    const info = _.pick(values, ["gender", "dateOfBirth"]);
    info.dateOfBirth = moment(info.dateOfBirth).format("YYYY/MM/DD");
    // get token of user have just created account
    updateProfile(info, values.file);
  };
  render() {
    const { loading, messageErr } = this.props.updateProfileReducer;
    const initialValues = {
      file: "",
      gender: "",
      dateOfBirth: "",
    };
    const { history } = this.props;
    const { success } = this.props.updateProfileReducer;
    if (success === true) {
      history.push("/congratulations");
    }
    return (
      <Formik initialValues={initialValues} onSubmit={this.submit}>
        {(formProps) => {
          console.log(formProps, "err")
          return (
            <Form className="container">
              <div className="form-field">
                <div className="process">
                  <center>
                    <p>{"Some final step to finish your registration"}</p>
                    <table>
                      <thead>
                        <tr>
                          <td>
                            <div className="rectangle active"></div>
                          </td>
                          <td className="between-its">
                            <div className="rectangle"></div>
                          </td>
                          <td className="between-its">
                            <div className="rectangle"></div>
                          </td>
                          <td className="between-its">
                            <div className="rectangle"></div>
                          </td>
                        </tr>
                      </thead>
                    </table>
                  </center>
                </div>
                <center>
                  <h3>{"Personal Information"}</h3>
                </center>
                <Field 
                name="file" 
                component={ImageUpload} />
                <Field
                  name="gender"
                  component="select"
                  label="Gender"
                  validate={validateGender}
                >
                  <option value="">Select your gender...</option>
                  <option value="男性">男性</option>
                  <option value="女性">女性</option>
                  <option value="その他">その他</option>
                </Field>
                {!_.isEmpty(formProps.touched) && formProps.touched.gender && !_.isEmpty(formProps.errors) && formProps.errors.gender ? (
                  <div className="alert-error">
                    <i
                      className="fa fa-exclamation-circle"
                      aria-hidden="true"
                    ></i>
                    <ErrorMessage name="gender" />
                  </div>
                ) : null}
                <Field
                  name="dateOfBirth"
                  component={InputField}
                  label="Birthday"
                  type="date"
                  validate={required}
                />

                {/* check error and loading */}
                <span className="alert-error">
                  {messageErr ? messageErr : ""}
                </span>
                <button type="submit" className="btn btn-primary btn-next">
                  <span
                    className={
                      loading ? "spinner-border spinner-border-sm" : ""
                    }
                  ></span>
                  {loading ? "Loading..." : "Next"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  }
}
const mapStateToProps = (state) => {
  return { updateProfileReducer: state.updateProfileReducer };
};
const mapDispatchToProps = (dispatch) => {
  return { updateProfile: (info, file) => dispatch(updateProfile(info, file)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonalInfo));
