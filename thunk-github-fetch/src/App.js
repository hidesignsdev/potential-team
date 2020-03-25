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
  }
  handleClick = () => {
    this.props.fetchData(this.state.url);

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
            onChange={() => this.enterURL} />
          <button className="btn btn-primary search-button" onClick={() => this.handleClick}>Search</button>
          <div style={{ backgroundColor: 'yellow', height: 300, width: 800 }}>
            
            {
            this.props.appData.data
            }
          </div>
        </div>


        {/* <div className="button" onClick={() => this.props.fetchData()}>
          <div className="buttonText">
            {this.props.appData.isFetching} <div>Loading</div>
            {
              this.props.appData.data.length ? (this.props.appData.data.map((person, i) => {
                return <div key={i}>
                  <div>Name: {person.name}</div>
                  <div>Age: {person.age}</div>
                </div>
              })
              ) : null
            }
          </div>
        </div> */}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return { appData: state.appData }
}
const mapDispatchToProps = (dispatch) => {
  return { fetchData: () => dispatch(fetchData()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)