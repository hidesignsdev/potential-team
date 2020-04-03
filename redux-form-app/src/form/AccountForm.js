import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AccountForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <div>
                    <span>View profile</span>
                </div>
                <div>
                <span>Change Password</span>

                </div>
                <div>
                    <span><a href="/" className="sign-out">{"Sign Out"}</a></span>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'account' })(AccountForm)