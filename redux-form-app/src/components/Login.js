import React from "react";
import LoginForm from '../form/LoginForm';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";

class Login extends React.Component {
    submit = values => {
        const { history, logIn } = this.props;
        console.log("account", values);
        logIn(values);
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
const mapStateToProps = (state) => {
    return { account: state.account }
}

const mapDispatchToProps = (dispatch) => {
    return { logIn: (account) => dispatch(logIn(account)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));