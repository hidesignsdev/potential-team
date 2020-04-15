import React from "react";
import { withRouter } from "react-router-dom";
import houseIcon from '../image/house.svg';
import notificationIcon from '../image/notification.svg';
import personIcon from '../image/person.svg';
import visibilityIcon from '../image/visibility.svg';
import Image from '../image/iconReact.png';
import arrowRight from '../image/arrow-right.svg';
import { connect } from "react-redux";
import _ from "lodash";

class Account extends React.Component {
    render() {
        const { data } = this.props.logInReducer;
        let name;
        let avatarUrl;
        if (!_.isEmpty(data)) {
            name = data.firstName + " " + data.lastName;
            avatarUrl = data.avatarUrl ? data.avatarUrl : Image;
        } else {
            name = "Your name"
            avatarUrl = Image;
        }
        return (
            <div className="container">
                <div className="form-field">
                    <img className="round" src={avatarUrl} alt=""></img>
                    <center className="username"><h3><b>{name}</b></h3></center>
                    <div>
                        <p className="btn-view">View profile
                    <img className="arrow" src={arrowRight} alt="">
                            </img>
                        </p>
                        <hr />
                    </div>
                    <div>
                        <p className="btn-change">Change Password
                    <img className="arrow" src={arrowRight} alt="">
                            </img>
                        </p>
                        <hr />
                    </div>
                    <div>
                        <a href="/login" className="sign-out">Sign Out</a>
                    </div>
                    <table className="icon-table">
                        <thead>
                            <tr>
                                <td>
                                    <center><img src={houseIcon} alt=""></img>
                                        <p>Home</p>
                                    </center>
                                </td>
                                <td className="between-its">
                                    <center><img src={visibilityIcon} alt=""></img>
                                        <p>Followed Companies</p>
                                    </center>
                                </td>
                                <td className="between-its">
                                    <center><img src={notificationIcon} alt=""></img>
                                        <p>Notification</p>
                                    </center>
                                </td>
                                <td className="between-its">
                                    <center>
                                        <img src={personIcon} alt=""></img>
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

const mapStatetoProps = (state) => {
    return { logInReducer: state.logInReducer }
}
export default connect(mapStatetoProps, null)(withRouter(Account));