import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";

class SignUp extends React.Component {

    submit = values => {
        const {signUp } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        signUp(infor);

        // history.push("/personal-info");
    }
    render() {
        // console.log("state appData", this.props.appData);
        // console.log("loading", this.state.loading);
        const {history } = this.props;
        const { success, error, loading } = this.props.appData;
        // if (error) {
        //     alert(error);
        //     this.setState({ loading: false });
        // }
        if(success){
            history.push("/personal-info");
        }
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup} loading={loading} messageErr={error}/>
            </div>
        );
    }
}
const mapStatetoProps = (state) => {
    return { appData: state.appData }
}
const mapDispatchToProps = (dispatch) => {
    return { signUp: (infor) => dispatch(signUp(infor)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(SignUp));