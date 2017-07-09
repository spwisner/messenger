import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this._handleUserClick = this._handleUserClick.bind(this);
  }



  _handleUserClick(event) {
    event.preventDefault();
    this.props._setRecipient(this.props.user.id);
  }

  render() {
    const userIsRecipient = (this.props.currentRecipient === this.props.user.id);
    console.log(userIsRecipient);
    return (
      <div>
      {userIsRecipient ?
        <a href="#" className="active" onClick={this._handleUserClick}>{this.props.user.name}</a>
        :
        <a href="#" onClick={this._handleUserClick}>{this.props.user.name}</a>
      }
      </div>
    );
  }
}
