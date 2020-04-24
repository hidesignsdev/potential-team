import React from 'react';

class InputField extends React.Component {
    render() {
        const { input, type, meta: { touched, error, warning }} = this.props;
        return (
            // dung cai nay de bo div
            <React.Fragment>
                <input {...input} type={type} />
                {touched && (error || warning) ? <div className="alert-error">
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{error || warning}
                </div> : null}
            </React.Fragment>
        )
    }
}
export default InputField;