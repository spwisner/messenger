import React, { Component } from 'react';

import './App.css';
import MsgInput from './MsgInput';
import Conversation from './Conversation';
import Contacts from './Contacts';
import Navigation from './navigation/Navigation';
import Homepage from './Homepage';

const data = require('./sample-data');


const users = data.users;
import MsgrStore from './stores/MsgrStore';


class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      users: users,
      currentUser: 0,
      recipient: 0
    };

    this._createMessage = this._createMessage.bind(this);
    this._setUser = this._setUser.bind(this);
    this._setRecipient = this._setRecipient.bind(this);
    this._errorMessage = this._errorMessage.bind(this);
  }

  componentWillMount() {
    MsgrStore.on("change", () => {
      this.setState({
        messages: MsgrStore._getAll()
      })
    })
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    return this.setState({
      messages: MsgrStore._getAll()
    });
  }

  _displayMessages() {
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

  _errorMessage(string) {
    return console.log(string);
  }

  _filterUsers() {
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

  _createMessage(newMessage) {
    const newMessages = this.state.messages.slice();
    newMessage.id = this.state.messages.length + 1;
    newMessages.push(newMessage);
    return this.setState({ messages: newMessages });
  }

  _setUser(id) {
    const userObject = {};
    userObject.currentUser = Number(id);
    return this.setState(userObject);
  }

  _setRecipient(id) {
    const recipientObject = {};
    recipientObject.recipient = Number(id);
    return this.setState(recipientObject);
  }

  render() {
    const messages = this._displayMessages();
    const users = this._filterUsers();
    const signedIn = (this.state.currentUser > 0);
    return (
      <div className="App">
        <div>
          <Navigation currentUser={this.state.currentUser} userList={this.state.users} _setUser={this._setUser} _setRecipient={this._setRecipient}/>
          {signedIn ?
          <div className="row">
            <div className="col-xs-4">
              <Contacts users={users} _setRecipient={this._setRecipient} currentRecipient={this.state.recipient}/>
            </div>
            <div className="col-xs-8">
              <Conversation messages={messages} currentUser={this.state.currentUser} currentRecipient={this.state.recipient}/>
              <MsgInput _errorMessage={this._errorMessage} _createMessage={this._createMessage} currentUser={this.state.currentUser} currentRecipient={this.state.recipient}/>
            </div>
          </div>
          : <Homepage /> }
        </div>
      </div>
    );
  }
}

export default App;
