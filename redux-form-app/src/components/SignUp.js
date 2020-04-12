import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";



class SignUp extends React.Component {

    submit = values => {
        const { history, signUp } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        const result = signUp(infor);
        // console.log("sign-up", result)
        history.push("/personal-info");
    }
    render() {
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup} />
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return { signUp: (infor) => dispatch(signUp(infor)) }
}
export default connect(null, mapDispatchToProps)(withRouter(SignUp));