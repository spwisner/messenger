import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: ""
    }

    this.handleClick = this.handleClick.bind(this);
  }

  removeActiveClass() {
    const verticalMenuDOM = document.getElementById("vertical-menu").children;

    for (let i = 0; i < verticalMenuDOM.length; i++) {
	     verticalMenuDOM[i].classList.remove("active");
     }
  }

  handleClick(event) {
    event.preventDefault();
    this.props.setRecipient(this.props.user.id);
    this.removeActiveClass();
    this.setState({
      activeClass: "active"
    });
  }

  render() {
    return (
      <a href="#" className={this.state.activeClass} onClick={this.handleClick}>{this.props.user.name}</a>
    );
  }
}
