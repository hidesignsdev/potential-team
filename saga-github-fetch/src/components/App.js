import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index';
import '../styles/App.css';
import UserPage from './UserPage';
import _ from "lodash";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    }
    this.enterURL = this.enterURL.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { url } = this.state;
    //console.log(this.props.appData.data, "before")
    this.props.getData(url);
    //console.log(this.props.appData.data, "alo")
  }
  enterURL = (event) => {
    if (this.props)
      this.setState({ url: event.target.value })
  }
  render() {
    return (
      <div className="container">
        <div className="wrapper" >
          <img className="logo" src="./Octicons-mark-github.svg" alt="" onClick={() => window.location.reload(false)} />
          <input className="input-style" type="text" placeholder="Enter url account github"
            onChange={this.enterURL} />
          <button className="btn btn-primary search-button" onClick={this.handleClick}>Search</button>
        </div>
        {this.props.appData.isFetching ? <h3 className="loading">Loading...</h3> : null}
        {this.props.appData.error ? <h3 className="error">User doesn't exists</h3> : null}
        {!_.isEmpty(this.props.appData.data) ? <UserPage user={this.props.appData.data} /> : null}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { appData: state.appData }
}
const mapDispatchToProps = (dispatch) => {
  return { getData: (url) => dispatch(getData(url)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)