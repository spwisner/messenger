import React from 'react';

export default class MsgInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = document.forms.messageForm;

    const data = {
      sender_id: 1,
      recipient_id: 2,
      body: form.messageInput.value,
      time_sent: new Date()
    };

    form.messageInput.value = "";

    this.props.createMessage(data);
  }

  render() {
    return (
      <div>
        <form name="messageForm" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea className="form-control" name="messageInput" placeholder="Type Message..." rows="3"></textarea>
          </div>
          <div className="form-group">
            <input type="submit" className="btn btn-block btn-success btn-md" value="Send" />
          </div>
        </form>
      </div>
    )
  }
}
