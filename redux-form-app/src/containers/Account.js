import React from "react";
import { withRouter } from "react-router-dom";
import houseIcon from '../image/house.svg';
import notificationIcon from '../image/notification.svg';
import personIcon from '../image/person.svg';
import visibilityIcon from '../image/visibility.svg';
import Image from '../image/iconReact.png';
import arrowRight from '../image/arrow-right.svg';
import { connect } from "react-redux";
import { logout } from "../actions/index";
import _ from "lodash";

class Account extends React.Component {

    render() {
        const { data } = this.props.logInReducer;
        const dataUpdate = _.get(this.props, "updateProfileReducer.data");
        let name;
        let avatarUrl;
        if (!_.isEmpty(data)) {
            name = data.firstName + " " + data.lastName;
            avatarUrl = data.avatarUrl ? data.avatarUrl : Image;
        } else if (!_.isEmpty(dataUpdate)) {
            name = dataUpdate.firstName + " " + dataUpdate.lastName;
            avatarUrl = dataUpdate.avatarUrl ? dataUpdate.avatarUrl : Image;
        }
        return (
            <div className="container">
                <div className="form-field ">
                    <div className="imgAccount">
                        <img src={avatarUrl} alt="" />
                    </div>
                    <center className="username">
                        <h3><b>{name}</b></h3>
                        </center>
                    <div>
                        <p className="btn-view">View profile
                    <img className="arrow" src={arrowRight} alt=""/>
                            
                        </p>
                        <hr />
                    </div>
                    <div>
                        <p className="btn-change">Change Password
                    <img className="arrow" src={arrowRight} alt=""/>
                           
                        </p>
                        <hr />
                    </div>
                    <div>
                        <a href="/login" onClick={this.props.signout} className="sign-out">{"Sign Out"}</a>
                    </div>
                    <table className="icon-table">
                        <thead>
                            <tr>
                                <td>
                                    <center>
                                        <img src={houseIcon} alt=""/>
                                        <p>Home</p>
                                    </center>
                                </td>
                                <td className="between-its">
                                    <center>
                                        <img src={visibilityIcon} alt=""/>
                                        <p>Followed Companies</p>
                                    </center>
                                </td>
                                <td className="between-its">
                                    <center>
                                        <img src={notificationIcon} alt=""/>
                                        <p>Notification</p>
                                    </center>
                                </td>
                                <td className="between-its">
                                    <center>
                                        <img src={personIcon} alt=""/>
                                        <p>Account</p>
                                    </center>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logInReducer: state.logInReducer,
        updateProfileReducer: state.updateProfileReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Account));