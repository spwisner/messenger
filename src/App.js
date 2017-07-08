import React, { Component } from 'react';

import './App.css';
import MsgInput from './MsgInput';
import Conversation from './Conversation';
import Contacts from './Contacts';

const messages = [
  {
    id: 1,
    sender_id: 1,
    recipient_id: 2,
    body: "First Message"
  },
  {
    id: 2,
    sender_id: 1,
    recipient_id: 2,
    body: "Second Message"
  },
  {
    id: 3,
    sender_id: 1,
    recipient_id: 2,
    body: "Third Message"
  },
];

class App extends Component {
  constructor() {
    super();

    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({
      messages: messages
    });
  }

  render() {
    console.log(messages);
    return (
      <div className="App">
        <h2>Messenger App</h2>
        <div>
          <div className="row">
            <div className="col-xs-4">
              <Contacts />
            </div>
            <div className="col-xs-8">
              <Conversation messages={this.state.messages}/>
              <MsgInput />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
