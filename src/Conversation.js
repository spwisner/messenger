import React from 'react';

const Message = (props) => (
  <ul>
    <li>{props.message.body}</li>
    <li>{props.message.time_sent.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</li>
  </ul>
)

function Conversation(props) {
  const messageItems = props.messages.map(message =>
    <Message key={message.id} message={message} />
  );

  return (
    <div className="conversation-container">
        {messageItems}
    </div>
  );
}

module.exports = Conversation;
