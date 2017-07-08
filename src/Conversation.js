import React from 'react';

const Message = (props) => (
  <li>{props.message.body}</li>
)

function Conversation(props) {
  const messageItems = props.messages.map(message =>
    <Message key={message.id} message={message} />
  );

  return (
    <div className="conversation-container">
      <ul>
        {messageItems}
      </ul>
    </div>
  );
}

module.exports = Conversation;
