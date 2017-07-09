import React from 'react';

function EmptyMessage(user, recipient) {
  if (user === 0) {
    return (
      <p>Login to get started</p>
    )
  } else if (user !== 0 && recipient === 0) {
    return (
      <p>Please Select a Recipient!</p>
    )
  } else {
    return (
      <p>No conversation exists.  Start one now!</p>
    )
  }
}

function alignText(currentUser, senderId) {
  if (currentUser === senderId) {
    return "message-right";
  } else {
    return "message-left";
  }
}

function Message(props) {
  const messageClass = alignText(props.currentUser, props.message.sender_id)
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

  const noMessage = EmptyMessage(props.currentUser, props.currentRecipient)

  const messagesExist = (props.messages.length > 0);

  return (
    <div className="conversation-container">
      {messagesExist ? messageItems : noMessage}
    </div>
  );
}

module.exports = Conversation;
