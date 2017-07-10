import dispatcher from '../dispatcher';

export function _createMessage(object) {
  dispatcher.dispatch( {
    type: "CREATE_MESSAGE",
    object,
  });
}

export function _setUser(id) {
  dispatcher.dispatch({
    type: "SET_USER",
    id,
  });
}

export function _setRecipient(id) {
  dispatcher.dispatch({
    type: "SET_RECIPIENT",
    id,
  });
}
