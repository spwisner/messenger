import dispatcher from '../dispatcher';

export function _createMessage(object) {
  dispatcher.dispatch( {
    type: "CREATE_MESSAGE",
    object,
  });
}

// export function deleteMessage(id) {
//   dispatcher.dispatch({
//     type: "DELETED_MESSAGE",
//     id,
//   });
// }
