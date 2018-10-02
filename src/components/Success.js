import React from 'react';

export default class Success extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newType: ''
    }
  }
  render(props) {
    return (
      <div className="successBox">
        <div className="successMsg">
          <i className="fas fa-times"></i>
          <p className="messageTxt">You have successfully created a new {this.props.newType}!</p>
        </div>
      </div>
    );
  }
}