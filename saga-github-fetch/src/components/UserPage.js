import React from "react";
import "../styles/App.css";

class UserPage extends React.Component {
    render() {
        const {avatar_url, name, login, bio, blog, company} = this.props.user;
        return (
            <div className="user-info">
              <img src={avatar_url} alt="" width="250px" />
              <h1>{name}</h1>
              <h3>{login}</h3>
              <p>
                {bio}
              </p>
              <p>
                {blog}
              </p>
              <p>
                {company}
              </p>
              <button className="btn btn-primary" onClick= {() => window.location.reload(false)}>Back</button> 
          </div>
        )
    }

}
export default UserPage;