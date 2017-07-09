import React, { Component } from 'react';

import './App.css';
import MsgInput from './MsgInput';
import Conversation from './Conversation';
import Contacts from './Contacts';
import Navigation from './navigation/Navigation';
import Homepage from './Homepage';

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
    this.errorMessage = this.errorMessage.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    return this.setState({
      messages: messages
    });
  }

  displayMessages() {
    let messages = this.state.messages;
    let visibleMessages = [];
    const currentUserId = this.state.currentUser;
    const currentRecipient = this.state.recipient;

    for (let i = 0; i < messages.length; i++) {
      let isSender = messages[i].sender_id;
      let isRecipient = messages[i].recipient_id;
      const currentUserSelected = (isSender === currentUserId || isRecipient === currentUserId);
      const currentRecipientSelected = (isSender === currentRecipient || isRecipient === currentRecipient);
      if (currentUserSelected && currentRecipientSelected) {
        visibleMessages.push(messages[i]);
      }
    }

    return visibleMessages;
  }

  // removeActiveClass() {
  //   const verticalMenuDOM = document.getElementById("vertical-menu").children;
  //
  //   for (let i = 0; i < verticalMenuDOM.length; i++) {
  //      verticalMenuDOM[i].classList.remove("active");
  //    }
  //
  //   return;
  // }

  errorMessage(string) {
    return console.log(string);
  }

  filterUsers() {
    let filteredUsers = [];
    const users = this.state.users;
    const currentUser = this.state.currentUser;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id !== currentUser) {
        filteredUsers.push(users[i]);
      }
    }

    return filteredUsers;
  }

  createMessage(newMessage) {
    const newMessages = this.state.messages.slice();
    newMessage.id = this.state.messages.length + 1;
    newMessages.push(newMessage);
    return this.setState({ messages: newMessages });
  }

  setUser(id) {
    const userObject = {};
    userObject.currentUser = Number(id);
    return this.setState(userObject);
  }

  setRecipient(id) {
    const recipientObject = {};
    recipientObject.recipient = Number(id);
    return this.setState(recipientObject);
  }

  render() {
    const messages = this.displayMessages();
    const users = this.filterUsers();
    const signedIn = (this.state.currentUser > 0);
    return (
      <div className="App">
        <div>
          <Navigation currentUser={this.state.currentUser} userList={this.state.users} setUser={this.setUser} setRecipient={this.setRecipient}/>
          {signedIn ?
          <div className="row">
            <div className="col-xs-4">
              <Contacts users={users} setRecipient={this.setRecipient} currentRecipient={this.state.recipient}/>
            </div>
            <div className="col-xs-8">
              <Conversation messages={messages} currentUser={this.state.currentUser} currentRecipient={this.state.recipient}/>
              <MsgInput errorMessage={this.errorMessage} createMessage={this.createMessage} currentUser={this.state.currentUser} currentRecipient={this.state.recipient}/>
            </div>
          </div>
          : <Homepage /> }
        </div>
      </div>
    );
  }
}

export default App;
