import React from "react";
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
                <button onClick={this.handleClick} className="btn-korec">
                    <img alt="" src="https://emoji.slack-edge.com/TMXAN6Y2K/korec/50dbde7cf5e4de89.png" />
                </button>
            </div>
        )
    }
}

export default withRouter(Hello);