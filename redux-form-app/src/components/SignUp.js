import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import {apiFunction} from "./api";


class SignUp extends React.Component {

    submit = values => {
        const { history } = this.props;
        // remove cfPassword
        const datapost = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        apiFunction('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', datapost, (success, response) => {
            if(success){
                history.push("/personal-info");
            } else {
                console.log(response);
                // alert(_.get(response, "error"))
                alert("Vui lòng thử lại!")
            }
        });
    }
    render() {
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup} />
            </div>
        );
    }
}
export default withRouter(SignUp);