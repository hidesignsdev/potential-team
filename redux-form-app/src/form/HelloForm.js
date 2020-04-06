import React from 'react';
import { reduxForm } from 'redux-form';

const HelloForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
               <button className="btn-korec"><h1>KOREC</h1></button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'hello' })(HelloForm)