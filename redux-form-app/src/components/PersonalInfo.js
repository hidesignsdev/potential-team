import React from "react";
import PersonalForm from '../form/PersonalForm';
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { updateProfile } from "../actions/index";
import _ from "lodash";
import moment from "moment";

class PersonalInfo extends React.Component {
    submit = values => {
        const { updateProfile, signUpReducer } = this.props;
        const info = _.pick(values, ["gender", "dateOfBirth"]);
        info.dateOfBirth = moment(info.dateOfBirth).format("YYYY/MM/DD")
        // get token of user have just created account
        let ssToken = _.get(signUpReducer,"data.sessionToken");
        updateProfile(info, values.file, ssToken);
    }
    render() {
        return (
            <div className="container">
                <PersonalForm onSubmit={this.submit} />
            </div>

        );
    }
}
const mapStatetoProps = (state) => {
    return {
        updateProfileReducer: state.updateProfileReducer,
        signUpReducer: state.signUpReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return { updateProfile: (info, file, ssToken) => dispatch(updateProfile(info, file, ssToken)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(PersonalInfo));