import React from "react";
//import HelloForm from '../form/HelloForm';
import { withRouter } from "react-router-dom";

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const { history } = this.props
        history.push("/login")
    }
    render() {
        return (
            <div className="container">
                <button onClick={this.handleClick} className="btn-korec"><h1>KOREC</h1></button>
            </div>
        )
    }
}

export default withRouter(Hello);