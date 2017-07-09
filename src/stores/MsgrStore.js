import {EventEmitter} from "events";
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
}

const msgrStore = new MsgrStore();
window.msgrStore = msgrStore;

export default msgrStore;
