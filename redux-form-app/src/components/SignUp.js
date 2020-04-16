import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";

class SignUp extends React.PureComponent {

    submit = values => {
        const { signUp } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        signUp(infor);
    }
    render() {
        const { history } = this.props;
        const { success, error, loading } = this.props.signUpReducer;
        if (success === true) {
            history.push("/personal-info");
        }
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup} loading={loading} messageErr={error} />
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return { signUpReducer: state.signUpReducer }
}
const mapDispatchToProps = (dispatch) => {
    return { signUp: (infor) => dispatch(signUp(infor)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(SignUp));