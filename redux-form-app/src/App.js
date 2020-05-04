import React, { Component } from 'react';
import "./App.css";
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import PersonalInfo from './containers/PersonalInfo';
import Account from './containers/Account';
import Congratulations from './containers/Congratulations';
import { Router, Switch, Route } from "react-router-dom";
import history from "./helpers/History"
import Hello from './containers/Hello';

export default class App extends Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          {/* cho nay ko co exact no se bao gom luon cac router khac */}
          <Route exact path="/">
            <Hello history={history} />
          </Route>
          <Route path="/login">
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
