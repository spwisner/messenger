import React from 'react';
import MsgrStore from '../../stores/MsgrStore';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this._handleUserClick = this._handleUserClick.bind(this);
  }



  _handleUserClick(event) {
    event.preventDefault();
    MsgrStore._setRecipient(this.props.user.id);
  }

  render() {
    const currentRecipient = MsgrStore._getRecipient();
    const userIsRecipient = (currentRecipient === this.props.user.id);
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
