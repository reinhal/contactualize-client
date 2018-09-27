import React from 'react';
import {API_BASE_URL} from '../config';
import './styles/Delete.css';

export default class DeleteInteraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: this.props.person,
      notes: this.props.notes
    }
  }

  deleteInteraction() {
    return fetch(`${API_BASE_URL}/interactions/${this.props.interactionID}`, {
      method: 'DELETE',
      // success: alert('Interaction successfully deleted!')
     })
  }

  onClick(e) {
    e.preventDefault();
    window.location.reload(true);
    this.deleteInteraction();
  }
  
  render() {
    return (
      <div>
        <button 
          className ="delete-item" 
          type="submit" 
          data-a11y-dialog-hide aria-label="Delete this contact."
          onClick={e => this.onClick(e)}><i className="far fa-trash-alt"></i>
            Delete
        </button>
      </div>
    );
  } 
}