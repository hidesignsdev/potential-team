import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";
import { Formik, useField } from 'formik';
import * as Yup from "yup";

// const SignUpSchema = Yup.object().shape({
//     firstName: Yup.string().required('Required'),
//     lastName: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     password: Yup.string().min(8,"Too short!").required('Required'),
//     cfPassword: Yup.string().when("password",{
//         is: val => (val ? true : false),
//         then: Yup.string().oneOf(
//             [Yup.ref("password")],
//             "Password mismatched"
//         )
//     }),
// })
class SignUp extends React.Component {

    submit = values => {
        const { signUp } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        signUp(infor);
    }
    render() {
        const initialValues = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cfPassword: '',
        }
        const { history } = this.props;
        const { success } = this.props.signUpReducer;
        console.log("sign up", this.props.signUpReducer)
        if (success === true) {
            history.push("/personal-info");
        }
        return (
            <Formik
                initialValues={initialValues}
                // validationSchema={SignUpSchema}
                validate={validateSignup}
                onSubmit={this.submit}
                render={props => <SignupForm{...props} messageErr = {_.get(this.props,"signUpReducer.error")}/>}
            />
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