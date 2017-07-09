import {EventEmitter} from "events";
const sampleData = require('../sample-data');
const messages = sampleData.messages;

class MsgrStore extends EventEmitter {
  constructor() {
    super();
    this.messages = messages;
  }

  getAll() {
    return this.messages;
  }
}

const msgrStore = new MsgrStore();

export default msgrStore;
