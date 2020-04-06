import React from 'react';
import { reduxForm } from 'redux-form';
import Image from '../image/iconReact.png'
const CongratulationsForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-field">
                <img className="square" src={Image} alt=""></img>
                <center><h3>{"Congratulations!"}</h3></center>
                <p>{"Your account has been created successfully"}</p>
                <button className="btn btn-primary btn-ok">OK</button>
            </div>
        </form>
    )
}
export default reduxForm({ form: 'congratulate' })(CongratulationsForm)