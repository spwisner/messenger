import React from 'react';
import SignOut from './SignOut';
import SignIn from './SignIn'

export default class Navigation extends React.Component {
  render() {
    const currentUser = (this.props.currentUser > 0);
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand" href="#" onClick={this.snippetsOnClick}>Messenger</span>
            </div>
            <div>
              {currentUser ? <SignOut setUser={this.props.setUser} setRecipient={this.props.setRecipient} /> : <SignIn userList={this.props.userList} setUser={this.props.setUser}/>}
            </div>
        </div>
      </nav>
    </div>
    )
  }
};
