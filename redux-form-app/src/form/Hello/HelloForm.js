import React from 'react';
import { reduxForm } from 'redux-form';
import './index.css';

const HelloForm = props => {
    return (
        <div>
            <h1 className="title">KOREC</h1>
        </div>
    )
}

export default reduxForm({ form: 'hello' })(HelloForm)