import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './index.css'

const PersonalForm = props => {
    const { handleSubmit } = props
    return (
        <div>
            <div>
                <p>Some final step to finish your registration</p>
            </div>
            <div className="column">
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>Personal Information</h1>
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <Field name="gender" component="select">
                        <option />
                        <option value="male">male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </Field>
                </div>
                <div>
                    <label htmlFor="birthday">Birthday</label>
                    <Field name="birthday" component="input" type="date" />
                </div>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}
export default reduxForm({ form: 'personal-info' })(PersonalForm)