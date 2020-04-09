import React from "react";
import LoginForm from '../form/LoginForm';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";
import axios from "axios";
import _ from "lodash";

async function submitLogin(data, callback) {
    await axios.post('https://api.korec-dev.scrum-dev.com/api/functions/login', data, {
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

class Login extends React.Component {
    submit = values => {
        const { history } = this.props;
        const datapost = {};
        datapost.username = values.email;
        datapost.password = values.password;
        submitLogin(datapost, (success, response) => {
            if(success){
                history.push("/account");
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
                <LoginForm onSubmit={this.submit} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { account: state.account }
}

const mapDispatchToProps = (dispatch) => {
    return { logIn: (account) => dispatch(logIn(account)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));