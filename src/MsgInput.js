import React from 'react';

export default class MsgInput extends React.Component {
  render() {
    return (
      <div>
        <form>
        <div className="form-group">
          <textarea className="form-control" name="notes" placeholder="Type Message..." rows="3"></textarea>
        </div>
        <div className="margin-btn-container">
          <button className="btn btn-success margin-right-btn">Send</button>
        </div>
        </form>
      </div>
    )
  }
}
