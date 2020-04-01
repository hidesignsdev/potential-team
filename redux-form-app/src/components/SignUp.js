import React from "react";
import SignupForm from '../form/SignupForm'

class SignUp extends React.Component {
    submit = values => {
        console.log(values)
    }
    render() {
        return (
            <SignupForm onSubmit={this.submit} />
        );
    }
}
export default SignUp;