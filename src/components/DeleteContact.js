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

  deleteContact(contactData) {
    return fetch(`${API_BASE_URL}/contacts/${this.props._id}`, {
      method: 'DELETE',
      body: JSON.stringify(contactData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      success: alert('Contact successfully deleted!')
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
        error: 'Could not delete new contact.',
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

    this.deleteContact(contactData);
  }
  
  render() {
    return (
      <div>
        <button className ="delete-contact" type="submit" data-a11y-dialog-hide aria-label="Delete this contact."><i className="far fa-trash-alt" onSubmit={e => this.onSubmit(e)}></i></button>
      </div>
    );
  } 
}