import React from "react";
import PersonalForm from '../form/PersonalForm';
import { withRouter } from "react-router-dom"
import _ from "lodash";
import {apiFunction} from "./api";


class PersonalInfo extends React.Component {
    submit = values => {
        const { history } = this.props;
        console.log(values, "gia tri cua personinfo")
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
        //test user commit
        return (
            <div className="container">
                <PersonalForm onSubmit={this.submit} />
            </div>

        );
    }
}
export default withRouter(PersonalInfo);