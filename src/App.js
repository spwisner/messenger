import React, { Component } from 'react';

import './App.css';
import MsgInput from './MsgInput';
import Conversation from './Conversation';
import Contacts from './Contacts';
import Navigation from './navigation/Navigation';

const messages = [
  {
    id: 1,
    sender_id: 1,
    recipient_id: 2,
    time_sent: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    body: "First Message"
  },
  {
    id: 2,
    sender_id: 1,
    recipient_id: 2,
    time_sent: new Date(Date.UTC(2013, 10, 20, 4, 0, 0)),
    body: "Second Message"
  },
  {
    id: 3,
    sender_id: 1,
    recipient_id: 2,
    time_sent: new Date(Date.UTC(2015, 11, 20, 5, 0, 0)),
    body: "Third Message"
  },
];

const users = [
  {
    id: 1,
    name: "Scott"
  },
  {
    id: 2,
    name: "Ryan"
  },
  {
    id: 3,
    name: "Adrienne"
  },
  {
    id: 4,
    name: "DJ"
  },
  {
    id: 5,
    name: "Andrew"
  }
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
      users: users,
      currentUser: 0,
    };

    this.createMessage = this.createMessage.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      messages: messages
    });
  }

  createMessage(newMessage) {
    const newMessages = this.state.messages.slice();
    newMessage.id = this.state.messages.length + 1;
    newMessages.push(newMessage);
    this.setState({ messages: newMessages });
  }

  setUser(id) {
    const userObject = {};
    userObject.currentUser = id;
    return this.setState(userObject);
  }

  render() {
    console.log(messages);
    let options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'};
    const newDate = new Date();
    const convertedDate = newDate.toLocaleString('en-US', options);
    console.log(convertedDate);
    return (
      <div className="App">
        <div>
          <Navigation currentUser={this.state.currentUser} userList={this.state.users} setUser={this.setUser} />
          <div className="row">
            <div className="col-xs-4">
              <Contacts users={this.state.users} />
            </div>
            <div className="col-xs-8">
              <Conversation messages={this.state.messages} />
              <MsgInput createMessage={this.createMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
