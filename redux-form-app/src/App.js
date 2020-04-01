import React from 'react';
import "./App.css";


import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalInfo from './components/PersonalInfo';
import Congratulations from './components/Congratulations';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  let submit = values => {
    console.log(values);
  }
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login onSubmit={submit}/>
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/personal-info">
          <PersonalInfo />
        </Route>
        <Route path="/congratulations">
          <Congratulations />
        </Route>
      </Switch>

    </Router>
  );
}
