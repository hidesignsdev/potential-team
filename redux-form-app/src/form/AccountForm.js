import React from 'react';
import { reduxForm } from 'redux-form';
import houseIcon from '../image/house.svg';
import notificationIcon from '../image/notification.svg';
import personIcon from '../image/person.svg';
import visibilityIcon from '../image/visibility.svg';
import Image from '../image/iconReact.png';

const AccountForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>

            <div className="form-field">
                <img className="round" src={Image} alt=""></img>
                <center className="username"><h3><b>Park JinYoung</b></h3></center>
                <div>
                    <p className="btn-view">View profile</p>
                    <hr />
                </div>
                <div>
                    <p className="btn-change">Change Password</p>
                    <hr />
                </div>
                <div>
                    <a href="/" className="sign-out">Sign Out</a>
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
        </form>
    )
}

export default reduxForm({ form: 'account' })(AccountForm)