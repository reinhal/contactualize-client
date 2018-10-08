import React from 'react';
import './styles/Feedback.css';

export default class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newType: ''
    }
  }
  render(props) {
    return (
      <div className="feedbackBox">
        <div className="feedbackMsg">
          <p className="messageTxt">You have successfully created a new {this.props.newType}!<i className="fas fa-times"></i></p>
        </div>
      </div>
    );
  }
}

Feedback.defaultProps = {
  newType: "contact"
}