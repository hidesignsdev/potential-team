import React from "react";
import PersonalForm from '../form/PersonalForm';
import { withRouter } from "react-router-dom"

class PersonalInfo extends React.Component {
    submit = values => {
        const { history } = this.props;
        console.log(values);
        history.push("/congratulations")
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