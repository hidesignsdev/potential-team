import React from "react";
import LoginForm from '../form/LoginForm';
import { withRouter } from "react-router-dom";

class Login extends React.Component {

    submit = values => {

        const { history } = this.props;
        console.log(values);
        history.push("/account")
    }
    render() {
        return (
            <div className="container">
                <LoginForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default withRouter(Login);