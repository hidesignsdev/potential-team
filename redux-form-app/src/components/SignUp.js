import React from "react";
import axios from "axios";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";

async function submitSignUp(data, callback) {
    await axios.post('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', data, {
        headers: {
            'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
            'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            'Content-Type': 'application/json',
        },
    }).then(response => {
        console.log(response)
        callback && callback(true, response)
    }).catch(error => {
        console.error(error)
        callback && callback(false, error)
    });
}

class SignUp extends React.Component {

    submit = values => {
        const { history } = this.props;
        // remove cfPassword
        const datapost = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        submitSignUp(datapost, (success, response) => {
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