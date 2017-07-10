import React from 'react';
import MsgrStore from '../../stores/MsgrStore';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);

    this.signOutRequest = this.signOutRequest.bind(this);
  }

  signOutRequest(event) {
    event.preventDefault();
    MsgrStore._setUser(0);
    MsgrStore._setRecipient(0);
    return;
  }

  render() {
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.signOutRequest}>Sign-Out <span className="glyphicon glyphicon-remove"></span></a>
          </li>
        </ul>
      </div>
    )
  }
}
