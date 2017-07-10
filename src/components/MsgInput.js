import React from 'react';
import MsgrStore from '../stores/MsgrStore';

export default class MsgInput extends React.Component {
  constructor(props) {
    super(props);

    this._handleMessageSubmit = this._handleMessageSubmit.bind(this);
  }

  _isRecipientSelected() {
    const recipientId = MsgrStore._getRecipient();
    if (recipientId > 0) {
      return true;
    } else {
      return false;
    }
  }

  _handleMessageSubmit(event) {
    event.preventDefault();
    const senderId= MsgrStore._getCurrentUser();
    const recipientId = MsgrStore._getRecipient();
    const form = document.forms.messageForm;

    const data = {
      sender_id: senderId,
      recipient_id: recipientId,
      body: form.messageInput.value,
      time_sent: new Date()
    };

    // Clear form
    form.messageInput.value = "";

    // Debugging messages
    if (senderId !==0 && recipientId!== 0) {
      return MsgrStore._createMessage(data);
    } else if (senderId === 0) {
      return MsgrStore._errorMessage("Error: Please login before sending message");
    } else if (recipientId === 0) {
      return MsgrStore._errorMessage("Error: Please select a recipient before sending message");
    } else {
      return MsgrStore._errorMessage("Error: An unknown error has occured");
    }
  }

  render() {
    const isRecipient = this._isRecipientSelected();
    return (
      <div className="msg-input-container">
        <form name="messageForm" onSubmit={this._handleMessageSubmit}>
          <div className="form-group">
            <input className="form-control msg-input" name="messageInput" placeholder="Type Message..." rows="3" />
          </div>
          {isRecipient ?
            <input id="create-message" type="submit" className="btn btn-block btn-success btn-md" value="Send" />
            :
            <input id="create-message" type="submit" className="btn btn-block btn-danger btn-md" value="Send" disabled/>
          }
        </form>
      </div>
    )
  }
}
