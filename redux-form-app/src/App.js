import React from 'react';


<<<<<<< HEAD
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      //<Login />
      //<SignUp />
      //<PersonalInfo />
      //<Hello />
      //<Congratulations />
      <Main />
    );
=======
import Login from './components/Login';
import SignUp from './components/SignUp';
import PersonalInfo from './components/PersonalInfo';
import Congratulations from './components/Congratulations';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  let submit = values => {
    console.log(values);
>>>>>>> 0c256a2463081afbc890db5182f91b95a6e4bfa9
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
