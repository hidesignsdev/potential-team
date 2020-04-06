import React from "react";
import HelloForm from '../form/HelloForm';
import { withRouter } from "react-router-dom";

class Hello extends React.Component {
    submit = () => {
        const { history } = this.props
        history.push("/login")
    }
    render() {
        return (
            <div className="container">
                <HelloForm onSubmit={this.submit} />
            </div>
        )
    }
}

export default withRouter(Hello);