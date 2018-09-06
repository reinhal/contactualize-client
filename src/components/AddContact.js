import React, {Fragment} from 'react';
import {API_BASE_URL} from '../config';
import AddContactForm from './AddContactForm';

export default class AddContact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: '',
      notes: ''
    };
    this.loadAddContact = this.loadAddContact.bind(this);
  }

  componentDidMount() {
    this.loadAddContact();
  }

  loadAddContact() {
    this.setState({
      error: null,
      loading: true
    });
    return fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      body: JSON.stringify({
        person: document.getElementById('person').value,
		    notes: document.getElementById('notes').value
      })
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(newContact => {
      this.setState({
        person: newContact.person,
        notes: newContact.notes,
        loading: false
      })
    })
    .catch(err => 
      this.setState({
        error: 'Could not create new contact.',
        loading: false
      })
    );
  }
  render() {
    let main;
    // return <AddContactForm handleSubmit={this.loadAddContact}/>;
    if(this.state.error) {
      main = (
        <div className="message message-error">{this.state.error}</div>
      );
    } else if (this.state.loading) {
      main = (
        <div className="message message-default">Creating new contact...</div>
      );
    } else {
      main = <div><AddContactForm /></div>
    }
    return (
      <Fragment>{main}</Fragment>
    );
  }
}

// function createNewAccount(username, password, firstName, lastName, email) {
//   console.log('Creating new Account: ' + username + password + firstName + lastName + email);
//   $.ajax({
//     method: 'POST',
//     url: ACCOUNT_URL,
//     data: JSON.stringify({username, password, firstName, lastName, email}),
//     success: function(data) {
//       alert('New Account Created');
//     },
//     dataType: 'json',
//     contentType: 'application/json'
//   });
// }