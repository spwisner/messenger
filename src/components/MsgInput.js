import React from 'react';

export default class MsgInput extends React.Component {
  constructor(props) {
    super(props);

    this._handleMessageSubmit = this._handleMessageSubmit.bind(this);
  }

  _handleMessageSubmit(event) {
    event.preventDefault();
    const senderId= this.props.currentUser;
    const recipientId = this.props.currentRecipient;
    const form = document.forms.messageForm;

    const data = {
      sender_id: senderId,
      recipient_id: recipientId,
      body: form.messageInput.value,
      time_sent: new Date()
    };

    // Clear form
    form.messageInput.value = "";

    // Error Debugging messages
    if (senderId !==0 && recipientId!== 0) {
      return this.props._createMessage(data);
    } else if (senderId === 0) {
      return this.props._errorMessage("Error: Please login before sending message");
    } else if (recipientId === 0) {
      return this.props._errorMessage("Error: Please select a recipient before sending message");
    } else {
      return this.props._errorMessage("Error: An unknown error has occured");
    }
  }

  render() {
    return (
      <div className="msg-input-container">
        <form name="messageForm" onSubmit={this._handleMessageSubmit}>
          <div className="form-group">
            <input className="form-control msg-input" name="messageInput" placeholder="Type Message..." rows="3" />
          </div>
            <input id="create-message" type="submit" className="btn btn-block btn-success btn-md" value="Send" />
        </form>
      </div>
    )
  }
}
