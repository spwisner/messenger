import React from 'react';
import User from './User';

function Contacts(props) {
  const users = props.users.map(user =>
    <User key={user.id} user={user} currentRecipient={props.currentRecipient} _setRecipient={props._setRecipient}/>
  );

  return (
    <div className="contacts-container">
      <h4 className="center-text underline">Contacts</h4>
        <div id="vertical-menu" className="vertical-menu">
          {users}
        </div>
    </div>
  );
}

module.exports = Contacts;
