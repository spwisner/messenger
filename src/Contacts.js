import React from 'react';
import User from './User';

function Contacts(props) {
  const users = props.users.map(user =>
    <User key={user.id} user={user} setRecipient={props.setRecipient}/>
  );

  return (
    <div className="contacts-container">
        <ul>
          {users}
        </ul>
    </div>
  );
}

module.exports = Contacts;
