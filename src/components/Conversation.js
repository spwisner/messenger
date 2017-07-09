import React from 'react';

function _emptyMessage(user, recipient) {
  if (user === 0) {
    return (
      <p className="empty-message-warning">Login to get started</p>
    )
  } else if (user !== 0 && recipient === 0) {
    return (
      <p className="empty-message-warning">Please Select a Recipient!</p>
    )
  } else {
    return (
      <p className="start-message">No conversation exists.  Start one now!</p>
    )
  }
}

function _alignText(currentUser, senderId) {
  if (currentUser === senderId) {
    return "message-right";
  } else {
    return "message-left";
  }
}

function Message(props) {
  const messageClass = _alignText(props.currentUser, props.message.sender_id)
  return (
    <ul className={messageClass}>
      <li>{props.message.body}</li>
      <li>{props.message.time_sent.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'})}</li>
    </ul>
  )
}

function Conversation(props) {
  const messageItems = props.messages.map(message =>
    <Message key={message.id} message={message} currentUser={props.currentUser}/>
  );
  const noMessage = _emptyMessage(props.currentUser, props.currentRecipient)
  const messagesExist = (props.messages.length > 0);

  return (
    <div className="conversation-container">
      {messagesExist ? messageItems : noMessage}
    </div>
  );
}

module.exports = Conversation;
