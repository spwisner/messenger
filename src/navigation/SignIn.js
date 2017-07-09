import React from 'react';

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

    this.props.setUser(userId);
    this.props.setRecipient(0);

    return this.setState({
      dropdownClass: "dropdown"
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.setRecipient(0);
    if (this.state.dropdownClass === "dropdown") {
      this.setState({
        dropdownClass: "dropdown open"
      });
    } else {
      this.setState({
        dropdownClass: "dropdown"
      });
    }
  }

  render() {
    const userOptions = this.props.userList.map(user =>
      <UserSelect key={user.id} user={user} />
    );
    return (
      <div>
        <ul className="nav navbar-nav navbar-right">
          <li className={this.state.dropdownClass}>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" onClick={this.handleClick}>Login <span className="glyphicon glyphicon-log-in"></span></a>
            <div className="dropdown-menu">
              <div className="container-fluid">
                <h2>Sign-In</h2>
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
