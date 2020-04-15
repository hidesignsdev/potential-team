import React from "react";
import SignupForm from '../form/SignupForm'
import { withRouter } from "react-router-dom";
import { validateSignup } from "../form/validate";
import _ from "lodash";
import { signUp } from '../actions/index';
import { connect } from "react-redux";



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    submit = values => {
        const { history, signUp, appData } = this.props;
        // remove cfPassword
        const infor = _.pick(values, ['firstName', 'lastName', 'email', 'password']);
        this.setState({ loading: true })
        const result = signUp(infor);
        // console.log("du lieu tra ve tu ham", result)
        // console.log("state appData trước", appData)

        // history.push("/personal-info");
    }
    render() {
        console.log("state appData", this.props.appData);
        const { error } = this.props.appData;
        const { loading } = this.state;
        if (error && loading) {
            alert(error);
            this.setState({ loading: false });
        }
        return (
            <div className="container">
                <SignupForm onSubmit={this.submit} validate={validateSignup} loading={loading} />
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