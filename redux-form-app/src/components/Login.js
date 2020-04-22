import React from "react";
import LoginForm from '../form/LoginForm';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logIn } from "../actions/index";
import { Formik } from 'formik';

class Login extends React.Component {
    submit = values => {
        const { logIn } = this.props;
        logIn(values);
    }
    render() {
        const initialValues = {
            username: '',
            password: ''
        }
        const { history } = this.props;
        const { success, error, loading } = this.props.logInReducer;
        if (success === true) {
            history.push("/account")
        }
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.submit}
                render={props => <LoginForm{...props} />}
            />
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