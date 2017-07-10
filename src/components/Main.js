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
    MsgrActions._errorMessage(string);
  }

  _createMessage(object) {
    MsgrActions._createMessage(object);
  }

  _setUser(id) {
    MsgrActions._setUser(id);
  }

  _setRecipient(id) {
    MsgrActions._setRecipient(id);
  }


  render() {
    const signedIn = (MsgrStore._getCurrentUser() > 0);
    return (
        <div>
          {signedIn ?
          <div className="row">
            <div className="col-xs-4">
              <Contacts />
            </div>
            <div className="col-xs-8">
              <Conversation />
              <MsgInput />
            </div>
          </div>
          : <Homepage /> }
        </div>
    );
  }
}

export default Main;
