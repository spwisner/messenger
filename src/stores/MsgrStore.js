import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const sampleData = require('../sample-data');
const messages = sampleData.messages;
const users = sampleData.users;

class MsgrStore extends EventEmitter {
  constructor() {
    super();
    this.messages = messages;
    this.users = users;
    this.displayedMsgs = [];
    this.currentUser = 0;
    this.recipient = 0;
  }

  _createMessage(data) {
    data.id = this.messages.length + 1;
    this.messages.push(data);
    this.emit("change");
  }

  _getAllMsgs() {
    return this.messages;
  }

  _getAllUsers() {
    return this.users;
  }

  _getCurrentUser() {
    return this.currentUser;
  }

  _getRecipient() {
    return this.recipient;
  }

  _setUser(id) {
    this.currentUser = Number(id);
    this.emit("change");
  }

  _setRecipient(id) {
    this.recipient = Number(id);
    this.emit("change");
  }

  // Function filters out irrelevant messages (i.e. messages that do not involve
  // the current user)

  _getDisplayedMsgs() {
    const messages = this.messages;
    let visibleMessages = [];
    const currentUserId = this.currentUser;
    const currentRecipient = this.recipient;

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

  // _getFilteredUsers removes the current user from the list of users to contact
  _getFilteredUsers() {
    let filteredUsers = [];
    const users = this.users;
    const currentUser = this.currentUser;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id !== currentUser) {
        filteredUsers.push(users[i]);
      }
    }

    return filteredUsers;
  }

  handleActions(action) {
    console.log('msgStore receive action', action);
    switch(action.type) {
      case "CREATE_MESSAGE": {
        this._createMessage(action.object);
        break;
      }
      case "SET_USER": {
        this._setUser(action.id);
        break;
      }
      case "SET_RECIPIENT": {
        this._setRecipient(action.id);
        break;
      }

      default:
        return null;
    }
  }
}

const msgrStore = new MsgrStore();

dispatcher.register(msgrStore.handleActions.bind(msgrStore));
// window.dispatcher = dispatcher;

export default msgrStore;
