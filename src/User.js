import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: ""
    }

    this._handleUserClick = this._handleUserClick.bind(this);
  }

  _removeActiveClass() {
    const verticalMenuDOM = document.getElementById("vertical-menu").children;

    for (let i = 0; i < verticalMenuDOM.length; i++) {
	     verticalMenuDOM[i].classList.remove("active");
     }
  }

  _handleUserClick(event) {
    event.preventDefault();
    this.props._setRecipient(this.props.user.id);
    this._removeActiveClass();
    this.setState({
      activeClass: "active"
    });
  }

  render() {
    return (
      <a href="#" className={this.state.activeClass} onClick={this._handleUserClick}>{this.props.user.name}</a>
    );
  }
}
