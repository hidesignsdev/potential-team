import React from "react";

class PersonalInfo extends React.Component {
    render() {
        //test user commit
        return (
            <div className="container-login">
                <h3>{"Personal Information"}</h3>
                <div className="login-form">
                    <div className="logo">
                        <img src="./logo.png" alt="" />
                    </div>

                    {/* <InputField type="text" placeholder="ex: c2ctechhub@gmail.com" label="Email" />
                    <InputField type="date" placeholder="" label="Birthday" /> */}
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        );
    }
}
export default PersonalInfo;