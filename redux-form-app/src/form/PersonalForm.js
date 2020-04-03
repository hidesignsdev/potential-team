import React from 'react';
import { Field, reduxForm } from 'redux-form';

const PersonalForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <h3>Personal Information</h3>
            <div className="form-field">
                <label htmlFor="gender">Gender</label>
                <Field name="gender" component="select">
                    <option />
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </Field>
                <label htmlFor="birthday">Birthday</label>
                <Field name="birthday" component="input" type="date" />
                <button type="submit" className="btn btn-primary">Next</button>
            </div>

        </form>
    )
}
export default reduxForm({ form: 'personal-info' })(PersonalForm)