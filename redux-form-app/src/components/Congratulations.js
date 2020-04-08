import React from "react";
//import CongratulationsForm from '../form/CongratulationsForm';
import { withRouter } from "react-router-dom";
import Image from '../image/iconReact.png'

class Congratulations extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const { history } = this.props;
        //console.log(values);
        history.push("/account")
    }
    render() {
        return (
            <div className="container">
                <div className="form-field">
                    <img className="square" src={Image} alt=""></img>
                    <center><h3>{"Congratulations!"}</h3></center>
                    <p>{"Your account has been created successfully"}</p>
                    <button onClick={this.handleClick} className="btn btn-primary btn-ok">OK</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Congratulations);