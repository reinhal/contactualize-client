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

  deleteInteraction(interactionData) {
    return fetch(`${API_BASE_URL}/interactions/${this.props._id}`, {
      method: 'DELETE',
      body: JSON.stringify(interactionData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      success: alert('Interaction successfully deleted!')
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .catch(err => {
      this.setState({
        error: 'Could not delete new interaction.',
        loading: false
      })
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const interactionData = {
      person: e.currentTarget.person.value,
      notes: e.currentTarget.notes.value
    };

    this.deleteInteraction(interactionData);
  }
  
  render() {
    return (
      <div>
        <button className ="delete-interaction" type="submit" data-a11y-dialog-hide aria-label="Delete this contact."><i className="far fa-trash-alt" onSubmit={e => this.onSubmit(e)}></i></button>
      </div>
    );
  } 
}