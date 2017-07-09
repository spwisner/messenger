const messages = [
  {
    id: 1,
    sender_id: 1,
    recipient_id: 2,
    time_sent: new Date(Date.UTC(2017, 6, 6, 3, 0, 0)),
    body: "Hey Ryan!"
  },
  {
    id: 2,
    sender_id: 3,
    recipient_id: 2,
    time_sent: new Date(Date.UTC(2017, 6, 6, 4, 0, 0)),
    body: "How did that meeting go?"
  },
  {
    id: 3,
    sender_id: 2,
    recipient_id: 1,
    time_sent: new Date(Date.UTC(2017, 6, 7, 11, 0, 0)),
    body: "What's up Scott"
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

module.exports = {
  messages,
  users,
}
