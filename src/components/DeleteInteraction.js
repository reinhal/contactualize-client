import React from 'react';
import {API_BASE_URL} from '../config';

export default class DeleteInteraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.person,
      notes: this.props.notes
    }
  }

  deleteInteraction() {
    return fetch(`${API_BASE_URL}/interactions/${this.props._id}`, {
      method: 'DELETE',
      success: alert('Interaction successfully deleted!')
     })
  }

  onClick(e) {
    e.preventDefault();
    this.deleteInteraction();
  }
  
  render() {
    return (
      <div>
        <button 
          className ="delete-interaction" 
          type="submit" 
          data-a11y-dialog-hide aria-label="Delete this contact."
          onClick={e => this.onClick(e)}><i className="far fa-trash-alt"></i>
            Delete
        </button>
      </div>
    );
  } 
}