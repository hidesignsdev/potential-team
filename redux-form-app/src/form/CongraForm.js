import React from 'react';
import { reduxForm } from 'redux-form';

const CongraForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Congratulations!</h1>
                <p>Your account has been created successfully</p>
            </div>
            <button type="submit">OK</button>
        </form>
    )
}

export default reduxForm({ form: 'congratulate' })(CongraForm)