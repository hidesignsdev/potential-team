import React from 'react';

class InputField extends React.Component {
    render() {
        const { input, type, meta: { touched, error, warning }} = this.props;
        console.log("error: ", error)
        console.log("touched: ", touched)
        return (
            // dung cai nay de bo div
            <React.Fragment>
                <input {...input} type={type} />
                {touched && (error || warning) ? <div className="alert-error">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>{error || warning}
                </div> : null}
            </React.Fragment>
        )
    }
}
export default InputField;