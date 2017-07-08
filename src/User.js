import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.setRecipient(this.props.user.id)
  }

  render() {
    return (
      <li><a href="#" onClick={this.handleClick}>{this.props.user.name}</a></li>
    );
  }
}
