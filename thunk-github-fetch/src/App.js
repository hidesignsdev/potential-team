import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    }
    this.enterURL = this.enterURL.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    const {url} = this.state;
    this.props.fetchData(url);
    console.log(this.props.appData.data, "Data")

  }
  enterURL = (event) => {
    this.setState({ url: event.target.value })
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper" >
          <img className="logo" src="./Octicons-mark-github.svg" alt="" />
          <input className="input-style" type="text" placeholder="Enter url account github"
            onChange={this.enterURL} />
          <button className="btn btn-primary search-button" onClick={this.handleClick}>Search</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { appData: state.appData }
}
const mapDispatchToProps = (dispatch) => {
  return { fetchData: (url) => dispatch(fetchData(url)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)