import React from 'react';

const User = (props) => (
    <li>{props.user.name}</li>
)

function Contacts(props) {
  const users = props.users.map(user =>
    <User key={user.id} user={user} />
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
