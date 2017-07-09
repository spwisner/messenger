import React from 'react';

export default class SignOut extends React.Component {
  constructor(props) {
    super(props);

    this.signOutRequest = this.signOutRequest.bind(this);
  }

  signOutRequest(event) {
    event.preventDefault();
    this.props.setUser(0);
    this.props._setRecipient(0);
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
