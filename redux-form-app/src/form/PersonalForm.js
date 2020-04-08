import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
import { required, age } from "./validate";
import InputField from "./InputField";
//import moment from 'moment';

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
                <img className="round" src={Image} alt=""></img>
                <label htmlFor="gender">Gender</label>
                <Field name="gender" component="select">
                    <option value="">Select your gender...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Field>
                <label htmlFor="birthday">Birthday</label>
                {/* <Field name="birthday" component={InputField} type="date"  validate={[required,age]} max={moment().format('l')} min={moment().subtract(100,"years").format('l')}/> */}
                <Field name="birthday" component={InputField} type="date" validate={[required, age]} />
                <button type="submit" className="btn btn-primary btn-next">Next</button>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'personalInfo' })(PersonalForm)