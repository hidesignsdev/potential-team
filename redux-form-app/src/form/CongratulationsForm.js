import React from 'react';
import { Field, reduxForm } from 'redux-form';

const CongratulationsForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                {/* <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div> */}
                <h3>{"Congratulations!"}</h3>
                <p>{"Your account has been created successfully"}</p>
                <button className="btn btn-primary">OK</button>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'personal-info' })(CongratulationsForm)