import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import {validateSignup} from "../form/validate";

class SignUp extends React.Component {
    submit = values => {
        const {history} = this.props;
        console.log("sign-up",values)
 
        history.push("/personal-info");
    }
    render() {
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup}/>
            </div>
        );
    }
}
export default withRouter(SignUp);