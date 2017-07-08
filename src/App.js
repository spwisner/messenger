import React, { Component } from 'react';

import './App.css';
import MsgInput from './MsgInput';
import Conversation from './Conversation';
import Contacts from './Contacts';
import Navigation from './navigation/Navigation';

const data = require('./sample-data');

const messages = data.messages;
const users = data.users;


class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      users: users,
      currentUser: 0,
      recipient: 0
    };

    this.createMessage = this.createMessage.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setRecipient = this.setRecipient.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      messages: messages
    });
  }

  displayMessages(messages) {
    let visibleMessages = [];
    const currentUserId = Number(this.state.currentUser);

    for (let i = 0; i < messages.length; i++) {
      let isSender = messages[i].sender_id;
      let isRecipient = messages[i].recipient_id;
      if (isSender === currentUserId || isRecipient === currentUserId) {
        visibleMessages.push(messages[i]);
      }
    }

    return visibleMessages;
  }

  createMessage(newMessage) {
    const newMessages = this.state.messages.slice();
    newMessage.id = this.state.messages.length + 1;
    newMessages.push(newMessage);
    this.setState({ messages: newMessages });
  }

  setUser(id) {
    const userObject = {};
    userObject.currentUser = Number(id);
    this.setState(userObject);
  }

  setRecipient(id) {
    const recipientObject = {};
    recipientObject.recipient = Number(id);
    this.setState(recipientObject);
  }

  render() {
    const messages = this.displayMessages(this.state.messages);
    return (
      <div className="App">
        <div>
          <Navigation currentUser={this.state.currentUser} userList={this.state.users} setUser={this.setUser} />
          <div className="row">
            <div className="col-xs-4">
              <Contacts users={this.state.users} setRecipient={this.setRecipient}/>
            </div>
            <div className="col-xs-8">
              <Conversation messages={messages} />
              <MsgInput createMessage={this.createMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
