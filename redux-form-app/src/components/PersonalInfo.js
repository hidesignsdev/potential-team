import React from "react";
import PersonalForm from '../form/PersonalForm'

class PersonalInfo extends React.Component {
    submit = values => {
        console.log(values)
    }
    render() {
        //test user commit
        return (
            <PersonalForm onSubmit={this.submit} />
        );
    }
}
export default PersonalInfo;