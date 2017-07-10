import dispatcher from '../dispatcher';

export function _createMessage(object) {
  dispatcher.dispatch( {
    type: "CREATE_MESSAGE",
    object,
  });
}

export function _setUser(number) {
  dispatcher.dispatch({
    type: "SET_USER",
    number,
  });
}

export function _setRecipient(number) {
  dispatcher.dispatch({
    type: "SET_RECIPIENT",
    number,
  });
}

export function _createErrorMessage(string) {
  dispatcher.dispatch({
    type: "THROW_ERROR",
    string,
  });
}
