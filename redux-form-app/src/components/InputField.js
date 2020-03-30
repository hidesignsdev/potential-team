import React from "react";

class InputField extends React.Component {
    render() {
        const {type, label, placeholder} = this.props;
        return (
            <div className="input-style">
                <span>{label}</span>
                <input type={type} placeholder={placeholder||""} />
            </div>
        );
    }

}
export default InputField;