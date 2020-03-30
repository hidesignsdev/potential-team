import React from "react";

class Congratulations extends React.Component {
    render() {
        return (
            <div className="container-login">
                <div className="login-form">
                    <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div>
                    <h3>{"Congratulations!"}</h3>
                    <p>{"Your account has been created successfully"}</p>
                    <button className="btn btn-primary">OK</button>
                </div>
            </div>
        );
    }
}
export default Congratulations;