import React from 'react';

import HelloForm from '../form/Hello/HelloForm';
import LoginForm from '../form/Login/LoginForm';
import SignupForm from '../form/Signup/SignupForm';
import PersonalForm from '../form/Personal/PersonalForm';
import CongraForm from '../form/CongraForm';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.showLogin = this.showLogin.bind(this);
        this.showSignup = this.showSignup.bind(this);
        this.showPersonal = this.showPersonal.bind(this);
        this.showCongrate = this.showCongrate.bind(this);
        this.state = {
            page: "personal",
        }
    }
    showLogin() {
        this.setState({ page: "signup" });
    }
    showSignup() {
        this.setState({ page: "personal" })
    }
    showPersonal() {
        this.setState({ page: "congrate" })
    }
    showCongrate() {
        this.setState({ page: "hello" })
    }
    renderSwitch(page) {
        switch (page) {
            case 'login':
                return <LoginForm onSubmit={this.showLogin}/>
            case 'signup':
                return <SignupForm onSubmit={this.showSignup} />
            case 'personal':
                return <PersonalForm onSubmit={this.showPersonal} />
            case 'congrate':
                return <CongraForm onSubmit={this.showCongrate} />
            case 'hello':
                return <HelloForm />
            default:
                break;
        }
    }
    render() {
        const { page } = this.state;
        console.log(page)
        return (
            <div>
                {this.renderSwitch(page)}
            </div>
        )
    }
}

export default Main;