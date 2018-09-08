import React from 'react';
import {API_BASE_URL} from '../config';
import './styles/AddContactForm.css';

export default class AddContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      notes: ''
    }
  }

  createContact(newContactData) {
    return fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      body: JSON.stringify(newContactData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      success: alert('Contact successfully created!')
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
        error: 'Could not create new contact.',
        loading: false
      })
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const contactData = {
      person: e.currentTarget.person.value,
      notes: e.currentTarget.notes.value
    };
    
    this.createContact(contactData);
  }

  render() {  
    return (
      <form id="create-contact" onSubmit={e => this.onSubmit(e)}>
        <fieldset>
          <legend>New Contact Information</legend>
          <div>
            <label htmlFor="person">Name*</label>
            <input 
              id="person" 
              className="newName" 
              type="text" 
              name="name" 
              defaultValue="enter a name "
            required />
          </div>
          <div>
            <label htmlFor="notes">Notes*</label>
            <textarea id="notes" name="notes" rows="15" required></textarea>
          </div>
        </fieldset>
        <div className="add-contact-button">
          <button type="submit">Create</button>
        </div>
      </form>
    );
  }
}