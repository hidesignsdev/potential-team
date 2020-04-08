import React from "react";
//import AccountForm from '../form/AccountForm';
import { withRouter } from "react-router-dom";
import houseIcon from '../image/house.svg';
import notificationIcon from '../image/notification.svg';
import personIcon from '../image/person.svg';
import visibilityIcon from '../image/visibility.svg';
import Image from '../image/iconReact.png';
import arrowRight from '../image/arrow-right.svg';

class Account extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="form-field">
                    <img className="round" src={Image} alt=""></img>
                    <center className="username"><h3><b>Park J</b></h3></center>
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

export default withRouter(Account);