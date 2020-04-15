import React from "react";
import LoginForm from '../form/LoginForm';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";

class Login extends React.Component {
    submit = values => {
        const { logIn } = this.props;
        logIn(values);
    }
    render() {
        const { history } = this.props;
        const { success, error, loading } = this.props.logInReducer;
        if (success === true) {
            history.push("/account")
        }
        return (
            <div className="container">
                <LoginForm onSubmit={this.submit} loading={loading} messageErr={error}/>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return { logInReducer: state.logInReducer }
}
const mapDispatchToProps = (dispatch) => {
    return { logIn: (user) => dispatch(logIn(user)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(Login));