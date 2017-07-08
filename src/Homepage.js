import React from 'react';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Welcome!</h1>
          <p>Login below to start</p>
        </div>
        <div>
          <form className="form login-form" name="signInForm" onSubmit={this.handleLoginSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input className="form-control" type="text" name="email" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input className="form-control" type="password" name="password" />
            </div>
            <div className="form-group">
              <input type="submit" className="btn btn-block btn-success btn-lg" value="Sign-In" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
