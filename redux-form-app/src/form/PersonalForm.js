import React from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { required } from "./validate";
//import InputField from "./InputField";
import ImageUpload from "../components/ImageUpload";

import { Form, Field } from 'formik';

const PersonalForm = props => {
    const { handleSubmit, loading, messageErr } = props;
    return (
        <Form>
            <div className="form-field">
                <div className="process">
                    <center>
                        <p>Some final step to finish your registration</p>
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
                <center><h3>Personal Information</h3></center>
                <Field name="file" component={ImageUpload} />
                <label htmlFor="gender">Gender</label>
                <Field name="gender" component="select">
                    <option value="">Select your gender...</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="その他">その他</option>
                </Field>
                <label htmlFor="dateOfBirth">Birthday</label>
                <Field name="dateOfBirth" type="date" />

                {/* check erro and loading */}
                <span className="alert-error">{messageErr ? messageErr : ""}</span>
                <button type="submit" className="btn btn-primary btn-next">
                    <span className={loading ? "spinner-border spinner-border-sm" : ""}></span>
                    {loading ? "Loading..." : "Next"}
                </button>
            </div>
        </Form>
    )
}
export default PersonalForm;