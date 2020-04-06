import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";

class SignUp extends React.Component {
    submit = values => {
        const {history} = this.props;
        console.log(values)
        history.push("/personal-info");
    }
    render() {
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} />
            </div>
        );
    }
}
export default withRouter(SignUp);