import React from "react";
import { withRouter } from "react-router-dom";
import Image from "../image/iconReact.png";
import { connect } from "react-redux";
import _ from "lodash";

class Congratulations extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { history } = this.props;
    history.push("/account");
  }
  render() {
    const { data } = this.props.updateProfileReducer;
    let avatarUrl;
    if (!_.isEmpty(data)) {
      avatarUrl = data.avatarUrl ? data.avatarUrl : Image;
    } else {
      avatarUrl = Image;
    }
    return (
      <div className="container">
        <div className="form-field">
          <div className="imgAccount ">
            <img src={avatarUrl} alt="" />
          </div>
          <center>
            <h3>{"Congratulations!"}</h3>
          </center>
          <p>{"Your account has been created successfully"}</p>
          <button onClick={this.handleClick} className="btn btn-primary btn-ok">
            {"OK"}
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    updateProfileReducer: state.updateProfileReducer,
  };
};
export default connect(mapStateToProps, null)(withRouter(Congratulations));
