import React, { Component } from 'react';

import MsgInput from './MsgInput';
import Conversation from './Conversation';
import Contacts from './contacts/Contacts';
import Homepage from './Homepage';
import * as MsgrActions from '../actions/MsgrActions';
import MsgrStore from '../stores/MsgrStore';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      messages: MsgrStore._getAllMsgs(),
      users: MsgrStore._getAllUsers(),
      displayMessages: MsgrStore._getDisplayedMsgs(),
      currentUser: MsgrStore._getCurrentUser(),
      recipient: MsgrStore._getRecipient(),
    };

    // this._setUser = this._setUser.bind(this);
    // this._setRecipient = this._setRecipient.bind(this);
    this._errorMessage = this._errorMessage.bind(this);
  }

  componentWillMount() {
    MsgrStore.on("change", () => {
      this.setState({
        messages: MsgrStore._getAllMsgs(),
        users: MsgrStore._getAllUsers(),
        displayMessages: MsgrStore._getDisplayedMsgs(),
        currentUser: MsgrStore._getCurrentUser(),
        recipient: MsgrStore._getRecipient(),
      });
    });
  }

  componentDidMount() {
    this.setState({
      messages: MsgrStore._getAllMsgs()
    });
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

  // Function filters out irrelevant messages (i.e. messages that do not involve
  // the current user)
  // _displayMessages() {
  //   MsgrActions._displayMessages();
  // }

  _createMessage(object) {
    MsgrActions._createMessage(object);
  }

  _setUser(id) {
    MsgrActions._setUser(id);
  }

  _setRecipient(id) {
    MsgrActions._setRecipient(id);
  }

  // _createMessage(newMessage) {
  //   const newMessages = this.state.messages.slice();
  //   newMessage.id = this.state.messages.length + 1;
  //   newMessages.push(newMessage);
  //   return this.setState({ messages: newMessages });
  // }

  // _setUser(id) {
  //   const userObject = {};
  //   userObject.currentUser = Number(id);
  //   return this.setState(userObject);
  // }

  // _setRecipient(id) {
  //   const recipientObject = {};
  //   recipientObject.recipient = Number(id);
  //   return this.setState(recipientObject);
  // }

  render() {
    const users = this._filterUsers();
    const signedIn = (this.state.currentUser > 0);
    return (
        <div>
          {signedIn ?
          <div className="row">
            <div className="col-xs-4">
              <Contacts users={users} _setRecipient={this._setRecipient} currentRecipient={this.state.recipient}/>
            </div>
            <div className="col-xs-8">
              <Conversation messages={this.state.displayMessages} currentUser={this.state.currentUser} currentRecipient={this.state.recipient}/>
              <MsgInput _errorMessage={this._errorMessage} _createMessage={this._createMessage} currentUser={this.state.currentUser} currentRecipient={this.state.recipient}/>
            </div>
          </div>
          : <Homepage /> }
        </div>
    );
  }
}

export default Main;
