import React from 'react';
import {API_BASE_URL} from '../config';
import './styles/NewInteractionForm.css';

export default class EditInteractionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    }
  }

  editnteraction(updatedInteractionData) {
    return fetch(`${API_BASE_URL}/interactions/${this.props.interactionID}`, {
      method: 'PUT',
      body: JSON.stringify(updatedInteractionData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      success: alert('Interaction successfully updated')
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
        error: 'Could not update interaction.',
        loading: false
      })
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const interactionData = {
      title: e.currentTarget.title.value,
      text: e.currentTarget.text.value
    };
    
    this.editInteraction(interactionData);
  }

  render() {  
    return (
      <form id="create-interaction" onSubmit={e => this.onSubmit(e)}>
        <fieldset>
          <legend>Edit interaction</legend>
          <div>
            <label htmlFor="title">Title*</label>
            <input 
              id="title" 
              className="newTitle" 
              type="text" 
              name="title" 
              defaultValue="e.currentTarget.title.value"
            />
          </div>
          <div>
            <label htmlFor="text">Text*</label>
            <textarea 
              id="text" 
              name="text" 
              rows="10"
              defaultValue="e.currentTarget.text.value">
            </textarea>
          </div>
        </fieldset>
        <div className="edit-interaction-button">
          <button type="submit">Update</button>
        </div>
      </form>
    );
  }
}