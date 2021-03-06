import React from 'react';
import MsgrStore from '../../stores/MsgrStore';

const UserSelect = (props) => (
  <option value={props.user.id}>{props.user.name}</option>
)

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownClass: "dropdown"
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const form = document.forms.signInForm;
    const userId = form.selectedUser.value;


    MsgrStore._setUser(userId);
    MsgrStore._setRecipient(0);

    return this.setState({
      dropdownClass: "dropdown"
    });
  }

  handleClick(event) {
    event.preventDefault();
    MsgrStore._setRecipient(0);
    if (this.state.dropdownClass === "dropdown") {
      return this.setState({
        dropdownClass: "dropdown open"
      });
    } else {
      return this.setState({
        dropdownClass: "dropdown"
      });
    }
  }

  render() {
    const userList = MsgrStore._getAllUsers();
    const userOptions = userList.map(user =>
      <UserSelect key={user.id} user={user} />
    );

    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.state.dropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.handleClick}>Login <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              <div className="container-fluid">
                <h3 className="underline">Login</h3>
                <form className="form login-form" name="signInForm" onSubmit={this.handleLoginSubmit}>
                  <div className="form-group">
                    <label>Select User:</label>
                    <select className="form-control" name="selectedUser">
                      {userOptions}
                    </select>
                  </div>
                  <input type="submit" className="btn btn-sm btn-success margin-right-btn" value="Submit"/>
                  <button type="button" className="btn btn-sm btn-danger" onClick={this.handleClick}>Cancel</button>
                </form>
              </div>
            </div>
          </li>
        </ul>
    </div>
    )
  }
}
