import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import {validateSignup} from "../form/validate";
import _ from "lodash";

async function submitSignUp(data) {
    try {
        let response = await fetch('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', {
            method: 'POST',
            headers: {
                'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
                'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        let result = response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

class SignUp extends React.Component {
    
    submit = values => {
        const {history} = this.props;
        // remove cfPassword
        const datapost = _.pick(values, ['firstName', 'lastName','email','password']);
        const result = submitSignUp(datapost);
        console.log("sign-up",result)

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