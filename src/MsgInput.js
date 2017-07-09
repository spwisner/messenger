import React from 'react';

export default class MsgInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
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

    form.messageInput.value = "";

    if (senderId !==0 && recipientId!== 0) {
      this.props.createMessage(data);
    } else if (senderId === 0) {
      this.props.errorMessage("Error: Please login before sending message");
    } else if (recipientId === 0) {
      this.props.errorMessage("Error: Please select a recipient before sending message");
    } else {
      this.props.errorMessage("Error: An unknown error has occured");
    }
  }

  render() {
    return (
      <div className="msg-input-container">
        <form name="messageForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea className="form-control" name="messageInput" placeholder="Type Message..." rows="3"></textarea>
          </div>
            <input id="create-message" type="submit" className="btn btn-block btn-success btn-md" value="Send" />
        </form>
      </div>
    )
  }
}
