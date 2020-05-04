import React from "react";

class InputField extends React.Component {
  render() {
    const {
      field,
      label,
      type,
      form: { touched, errors },
      forgotPassword,
    } = this.props;
    return (
      // dung cai nay de bo div
      <React.Fragment>
        <label htmlFor={field.name}>
          {label}
          {forgotPassword ? (
            <span>
              <a className="fg-pass" href="/sign-up">
                {"Forgot password?"}
              </a>
            </span>
          ) : null}
        </label>
        <input {...field} type={type} />
        {touched[field.name] && errors[field.name] ? (
          <div className="alert-error">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
            {errors[field.name]}
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
export default InputField;
