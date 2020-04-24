import React from "react";
import PersonalForm from '../form/PersonalForm';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { updateProfile } from "../actions/index";
import _ from "lodash";
import moment from "moment";
import { Formik } from 'formik';

class PersonalInfo extends React.Component {
    submit = values => {
        const { updateProfile } = this.props;
        const info = _.pick(values, ["gender", "dateOfBirth"]);
        info.dateOfBirth = moment(info.dateOfBirth).format("YYYY/MM/DD")
        // get token of user have just created account
        updateProfile(info, values.file);
    }
    render() {
        const initialValues = {
            file: '',
            gender: '',
            dateOfBirth: '',
        }
        const { history } = this.props;
        const { success } = this.props.updateProfileReducer;
        if (success === true) {
            history.push("/congratulations");
        }
        return (
            <Formik
                initialValues={initialValues}
                onSubmit={this.submit}
                render={props => <PersonalForm {...props}  messageErr = {_.get(this.props,"updateProfileReducer.error")}/>}
            />

        );
    }
}
const mapStatetoProps = (state) => {
    return { updateProfileReducer: state.updateProfileReducer }
}
const mapDispatchToProps = (dispatch) => {
    return { updateProfile: (info, file) => dispatch(updateProfile(info, file)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(PersonalInfo));