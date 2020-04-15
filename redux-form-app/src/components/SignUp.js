import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";



class SignUp extends React.Component {

    submit = values => {
        const { history, signUp, appData } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        const result = signUp(infor);
        // console.log("du lieu tra ve tu ham", result)
        console.log("state appData trước", appData)

        // history.push("/personal-info");
    }
    render() {
        console.log("state appData", this.props.appData);
        const {error} = this.props.appData;
        if(error){
            alert(error);
        }
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup} />
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