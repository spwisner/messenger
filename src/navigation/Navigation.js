import React from 'react';
import SignOut from './SignOut';
import SignIn from './SignIn';

function Navigation(props) {
  const currentUser = (props.currentUser > 0);

  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <span className="navbar-brand">Messenger</span>
          </div>
          <div>
            {currentUser ? <SignOut setUser={props.setUser} _setRecipient={props._setRecipient} /> : <SignIn userList={props.userList} setUser={props.setUser} _setRecipient={props._setRecipient} />}
          </div>
        </div>
      </nav>
    </div>
  )
};

module.exports = Navigation;
