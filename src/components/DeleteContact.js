import React from 'react';
import {API_BASE_URL} from '../config';

export default class DeleteContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.person,
      notes: this.props.notes
    }
  }

  deleteContact() {
    return fetch(`${API_BASE_URL}/contacts/${this.props._id}`, {
      method: 'DELETE',
      success: alert('Contact successfully deleted!')
    })
  }

  onClick(e) {
    e.preventDefault();
    this.deleteContact();
  }
  
  render() {
    return (
      <div>
        <button 
          className ="delete-contact" 
          type="submit" 
          data-a11y-dialog-hide aria-label="Delete this contact."
          onClick={e => this.onClick(e)}><i className="far fa-trash-alt" ></i>
           Delete</button>
      </div>
    );
  } 
}