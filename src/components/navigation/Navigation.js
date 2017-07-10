import React from 'react';
import SignOut from './SignOut';
import SignIn from './SignIn';
import MsgrStore from '../../stores/MsgrStore';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: MsgrStore._getCurrentUser(),
      users: MsgrStore._getAllUsers(),
    };
  }

  componentWillMount() {
    MsgrStore.on("change", () => {
      this.setState({
        currentUser: MsgrStore._getCurrentUser(),
        users: MsgrStore._getAllUsers(),
      });
    });
  }

  render() {
    const currentUser = this.state.currentUser;
    const isCurrentUser = (currentUser > 0);

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span className="navbar-brand">Strive Messenger</span>
            </div>
            <div>
              {isCurrentUser ? <SignOut /> : <SignIn />}
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
