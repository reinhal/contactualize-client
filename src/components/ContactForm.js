import React from 'react';
import PropTypes from 'prop-types';
import {API_BASE_URL} from '../config';
import './styles/ContactForm.css';



/**
 * Stop trying to make `fetch` happen, W3C; it's not going to happen.
 * @param {String} path 
 * @param {Object} [fetchOpts={ method: 'get' }] 
 * @param {Object} [params=null]
 */
function soFetch(path, fetchOpts = { method: 'get' }, params = null) {
  let url = new URL(path);
  if (params !== null) Object.values(params).forEach(([k, v]) => url.searchParams.append(k, v));
  return fetch(url, fetchOpts)
    .then((res) => res.json())
    .catch((ex) => console.error('Not so fetch :(', ex));
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.reqMethod = this.props.type;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handlePerson = this.handlePerson.bind(this);

    this.state = {
      person: '',
      notes: ''
    }
  }

  componentDidMount() {
    ///check for ID, make GET then setState
  }

  createContact(contactData) {
    console.log(contactData);
    let contactUrl = `${API_BASE_URL}/contacts`;
    if (this.reqMethod === 'PUT' && this.props.contactID) {
      contactUrl += '/' + this.props.contactID;
    }

    const opts = {
      method: this.reqMethod, 
      body: JSON.stringify(contactData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    };

    return soFetch(`${contactUrl}`, opts)
      .then(data => console.log(data))
      .catch(err => console.error('oops!'));
  }
  //   return fetch(`${API_BASE_URL}/contacts`, {
  //     method: 'POST',
  //     body: JSON.stringify(newContactData),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     }
  //   })
  //   .then(res => {
  //     if (!res.ok) {
  //       return Promise.reject(res.statusText);
  //     }
  //     return res.json();
  //   })
  //   .catch(err => {
  //     this.setState({
  //       error: 'Could not create new contact.',
  //       loading: false
  //     })
  //   })
  // }

  onSubmit(e) {
    e.preventDefault();
    const contactData = {
      person: e.currentTarget.name.value,
      notes: e.currentTarget.notes.value
    };
    this.createContact(contactData);
  }

  onInputChange(e) {
    this.setState({
      [e.target.person]: e.target.value
    });
  }

  handlePerson(e) {
    this.setState({
      person: this.state.person,
      notes: this.state.notes
    })
  }

  render() {
    console.log("render");
    //check for id 
    return (
      <form id="create-contact" onSubmit={e => this.onSubmit(e)}>
        <fieldset className="contact-form">
          <legend>
            {this.reqMethod === 'POST'
              ? 'Add a Contact'
              : 'Update Contact Information'}
          </legend>
          <div>
            <label htmlFor="person">Name*</label>
            <input 
              id="person" 
              className="newName" 
              type="text" 
              name="name" 
              defaultValue="enter a name "
              value={this.state.person}
              onChange={this.onInputChange}
            required />
          </div>
          <div>
            <label htmlFor="notes">Notes*</label>
            <textarea id="notes" name="notes" rows="15" required></textarea>
          </div>
        </fieldset>
        <div className="button-div">
          <button className="contact-button" type="submit" onClick={this.handlePerson}>{this.reqMethod === 'POST' ? 'Create' : 'Update'} </button>
        </div>
      </form>
    );
  }
}

ContactForm.defaultProps = {
  contactLegend: 'New Contact Information',
  contactButton: 'Create', 
  type: 'POST'
};