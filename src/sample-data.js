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
    sender_id: 3,
    recipient_id: 2,
    time_sent: new Date(Date.UTC(2013, 10, 20, 4, 0, 0)),
    body: "Second Message"
  },
  {
    id: 3,
    sender_id: 2,
    recipient_id: 1,
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

module.exports = {
  messages,
  users,
}
