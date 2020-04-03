import React, { Component } from 'react';
import "./App.css";


import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalInfo from './components/PersonalInfo';
import Account from './components/Account';
import Congratulations from './components/Congratulations';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
import history from "./History"

export default class App extends Component {

  render() {
    return (
      <Router history={history} >
        <Switch>
          {/* cho nay ko co exact no se bao gom luon cac router khac */}
          <Route exact path="/">
            <Login history={history} />
          </Route>
          <Route path="/sign-up">
            <SignUp history={history} />
          </Route>
          <Route path="/personal-info">
            <PersonalInfo history={history} />
          </Route>
          <Route path="/congratulations">
            <Congratulations history={history} />
          </Route>
          <Route path="/account">
            <Account history={history} />
          </Route>
        </Switch>

      </Router >
    );
  }
}
