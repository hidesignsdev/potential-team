import React from "react";
import LoginForm from '../form/LoginForm';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";
import { submitLogin } from '../apis';


class Login extends React.Component {
    submit = values => {
        const { history } = this.props;
        const datapost = {};
        datapost.username = values.email;
        datapost.password = values.password;
        submitLogin(datapost, (success, response) => {
            if (success) {
                const data = response.data.result;
                console.log(response.data.result, "data after request in Login class")
                let user = {};
                user.name = data.firstName + " " + data.lastName;
                user.email = data.email;
                user.gender = data.gender ? data.gender : "";
                user.dateOfBirth = data.dateOfBirth ? data.dateOfBirth : "";
                user.avatarUrl = data.avatarUrl ? data.avatarUrl : "";
                this.props.logIn(user);
                history.push("/account");
            } else {
                // console.log(response);
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


const mapDispatchToProps = (dispatch) => {
    return { logIn: (user) => dispatch(logIn(user)) }
}
export default connect(null, mapDispatchToProps)(withRouter(Login));