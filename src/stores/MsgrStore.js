import { EventEmitter } from "events";
import dispatcher from '../dispatcher';
const sampleData = require('../sample-data');
const messages = sampleData.messages;

class MsgrStore extends EventEmitter {
  constructor() {
    super();
    this.messages = messages;
  }

  _createMessage(data) {
    data.id = this.messages.length + 1;
    this.messages.push(data);
    this.emit("change");
  }

  _getAll() {
    return this.messages;
  }

  handleActions(action) {
    console.log('msgStore receive action', action);
    switch(action.type) {
      case "CREATE_MESSAGE": {
        this._createMessage(action.object);
      }
    }
  }
}

const msgrStore = new MsgrStore();

dispatcher.register(msgrStore.handleActions.bind(msgrStore));
window.dispatcher = dispatcher;

export default msgrStore;
