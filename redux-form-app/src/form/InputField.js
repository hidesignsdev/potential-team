import React from 'react';

class InputField extends React.Component {
    render() {
        const { field, type, form: { touched, errors }} = this.props;
        return (
            // dung cai nay de bo div
            <React.Fragment>
                <input {...field} type={type} />
                {touched[field.name] && errors[field.name] ? <div className="alert-error">
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{errors[field.name]}
                </div> : null}
            </React.Fragment>
        )
    }
}
export default InputField;