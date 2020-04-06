import React from "react";
import AccountForm from '../form/AccountForm';
import { withRouter } from "react-router-dom";

class Account extends React.Component {

    submit = values => {

        //const { history } = this.props;
        console.log(values);
        // history.push("/")
    }
    render() {
        return (
            <div className="container">
                <AccountForm onSubmit={this.submit} />
            </div>
        );
    }
}

export default withRouter(Account);