import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from "./validate";
import InputField from "./InputField";
import ImageUpload from "../components/ImageUpload";

const PersonalForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <div className="process">
                    <p>Some final step to finish your registration</p>
                    <center>
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
                {/* <img className="round" src={Image} alt=""></img> */}
                <Field name="file" component={ImageUpload} />
                <label htmlFor="gender">Gender</label>
                <Field name="gender" component="select">
                    <option value="">Select your gender...</option>
                    <option value="男性">男性</option>
                    <option value="女性">女性</option>
                    <option value="その他">その他</option>
                </Field>
                <label htmlFor="dateOfBirth">Birthday</label>
                {/* <Field name="dateOfBirth" component={InputField} type="date"  validate={[required,age]} max={moment().format('l')} min={moment().subtract(100,"years").format('l')}/> */}
                <Field name="dateOfBirth" component={InputField} type="date" validate={required} />
                <button type="submit" className="btn btn-primary btn-next">Next</button>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'personalInfo' })(PersonalForm)