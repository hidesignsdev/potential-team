import React from 'react';
import Login from "./components/Login";
import "./App.css";
import SignUp from './components/SignUp';
import PersonalInfo from './components/PersonalInfo';
import Congratulations from './components/Congratulations';

class App extends React.Component {
  render(){
    return (
      <div className="container">
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <PersonalInfo/> */}
        <Congratulations/>
      </div>
    );
  }
  
}

export default App;
