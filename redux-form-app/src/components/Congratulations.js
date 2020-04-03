import React from "react";
import CongratulationsForm from '../form/CongratulationsForm';
import { withRouter } from "react-router-dom";

class Congratulations extends React.Component {

    submit = values => {

        const { history } = this.props;
        console.log(values);
        history.push("/account")
    }
    render() {
        return (
            <div className="container">
                <CongratulationsForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default withRouter(Congratulations);