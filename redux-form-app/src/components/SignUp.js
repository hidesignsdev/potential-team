import React from "react";
import axios from "axios";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import axios from 'axios';

<<<<<<< HEAD
async function submitSignUp(data) {
    // try {
    //     let response = await fetch('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', {
    //         method: 'POST',
    //         headers: {
    //             'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
    //             'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     let result = response.json();
    //     return result;
    // } catch (error) {
    //     console.error(error);
    // }
    axios({
        method: 'POST',
        url:'https://api.korec-dev.scrum-dev.com/api/functions/userSignup',
=======
async function submitSignUp(data, callback) {
    await axios.post('https://api.korec-dev.scrum-dev.com/api/functions/userSignup', data, {
>>>>>>> 77beaf9b941b71abd5e0e0b9bafd137f3140c62d
        headers: {
            'X-Parse-Application-Id': 'U2fZ7KvIHVvH4snHbkj02uKBpISSWF8C1oePV7iraoy69JrMBvPi',
            'X-Parse-REST-API-Key': 'UrEeTwu2B5izB28HmtcOm7JpLmDSbSpxILDJ7NdXlA9InpenPj',
            'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(data),
    })
=======
    }).then(response => {
        console.log(response)
        callback && callback(true, response)
    }).catch(error => {
        console.error(error)
        callback && callback(false, error)
    });
>>>>>>> 77beaf9b941b71abd5e0e0b9bafd137f3140c62d
}

class SignUp extends React.Component {

    submit = values => {
        const { history } = this.props;
        // remove cfPassword
        const datapost = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
<<<<<<< HEAD
        const result = submitSignUp(datapost);
        console.log("sign-up", result)

        history.push("/personal-info");
=======
        submitSignUp(datapost, (success, response) => {
            if(success){
                history.push("/personal-info");
            } else {
                console.log(response);
                // alert(_.get(response, "error"))
                alert("Vui lòng thử lại!")
            }
        });
>>>>>>> 77beaf9b941b71abd5e0e0b9bafd137f3140c62d
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