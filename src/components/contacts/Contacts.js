import React from 'react';
import User from './User';
import MsgrStore from '../../stores/MsgrStore';

function Contacts(props) {
  const allUsers = MsgrStore._getFilteredUsers();
  const users = allUsers.map(user =>
    <User key={user.id} user={user}/>
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
