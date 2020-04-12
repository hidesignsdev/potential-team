import React from "react";
import PersonalForm from '../form/PersonalForm';
import { withRouter } from "react-router-dom"
import {connect} from "react-redux";
import {updateProfile} from "../actions/index";
import _ from "lodash";

class PersonalInfo extends React.Component {
    submit = values => {
        const { history, appData, updateProfile } = this.props;
        const fileObj = {
            file: _.get(values,"file.fileObj"), 
            type: "AVATAR"
        };
        const data = _.pick(values, ["gender", "dateOfBirth"]);
        data.firstName = appData.data.firstName
        data.lastName = appData.data.lastName
        console.log(values, "gia tri cua personinfo")
        console.log(appData.data, "data cuar appData")
        updateProfile(fileObj,data );
        // const datapost = _.pick(values, ['gender', 'dateOfBirth']);
        // apiFunction('https://api.korec-dev.scrum-dev.com/api/functions/uploadImage', datapost, (success, response) => {
        //     if (success) {
        //         history.push("/congratulations")
        //     } else {
        //         console.log(response);
        //         // alert(_.get(response, "error"))
        //         alert("Vui lòng thử lại!")
        //     }
        // });
    }
    render() {
        console.log(this.props.appData, "data cuar appData")

        return (
            <div className="container">
                <PersonalForm onSubmit={this.submit} />
            </div>

        );
    }
}
const mapStatetoProps = (state) => {
    return { appData: state.appData }
}
const mapDispatchToProps = (dispatch) => {
    return { updateProfile: (infor) => dispatch(updateProfile(infor)) }
}
export default connect(mapStatetoProps, mapDispatchToProps)(withRouter(PersonalInfo));