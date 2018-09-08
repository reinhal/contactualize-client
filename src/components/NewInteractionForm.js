import React from 'react';
import {API_BASE_URL} from '../config';
import './styles/NewInteractionForm.css';

export default class NewInteractionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    }
  }

  createInteraction(newInteractionData) {
    return fetch(`${API_BASE_URL}/interactions`, {
      method: 'POST',
      body: JSON.stringify(newInteractionData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8' 
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
        error: 'Could not create new interaction.',
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

    this.createInteraction(interactionData);
  }

  render() {
    return (
      <form id="create-interaction" onSubmit={e => this.onSubmit(e)}>
        <fieldset>
          <legend>Record a new interaction</legend>
          <div>
            <label htmlFor="title">Title*</label>
            <input 
              id="title" 
              className="newTitle" 
              type="text" 
              name="title" 
              defaultValue="enter a title for this interaction"
            />
          </div>
          <div>
            <label htmlFor="text">Text*</label>
            <textarea id="text" name="text" rows="10"></textarea>
          </div>
        </fieldset>
        <div className="add-interaction-button">
          <button type="submit">Create</button>
        </div>
      </form>
    );
  }
}