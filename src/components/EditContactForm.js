import React from 'react';
import {API_BASE_URL} from '../config';

import './styles/AddContactForm.css';
import AddContactForm from './AddContactForm';


export default class EditContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: '',
      notes: ''
    }
  }

  editContact(updatedContactData) {
    return fetch(`${API_BASE_URL}/contacts/${this.props.contactID}`, {
      method: 'PUT',
      body: JSON.stringify(updatedContactData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
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
        error: 'Could not update contact.',
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
    
    this.editContact(contactData);
  }
 
  render() {
    return (
      <AddContactForm {...this.props} />
      // <form id="update-contact" onSubmit={e => this.onSubmit(e)}>
      //   <fieldset>
      //     <legend>Update Contact Information</legend>
      //     <div>
      //       <label htmlFor="person">Name*</label>
      //       <input 
      //         id="person" 
      //         className="newName" 
      //         type="text" 
      //         name="name" 
      //         defaultValue= "Enter a new name here"
      //       required />
      //     </div>
      //     <div>
      //       <label htmlFor="notes">Notes*</label>
      //       <textarea 
      //         id="notes" 
      //         name="notes" 
      //         rows="15"
      //         defaultValue= "Enter a new note here"  
      //         required>
      //       </textarea>
      //     </div>
      //   </fieldset>
      //   <div className="update-contact-button">
      //     <button type="submit">Update</button>
      //   </div>
      // </form>
    );
  }
}