import React from 'react';
import {API_BASE_URL} from '../config';

import './styles/ContactForm.css';
import ContactForm from './ContactForm';


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
      <ContactForm {...this.props} />
    );
  }
}