import React from 'react';
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
    console.log(this.props.params);
    if (this.props.params !== undefined) {
      soFetch(`${API_BASE_URL}/contacts/${this.props.params.id}`)
        .then(data => this.setState({ person: data.person, notes: data.notes}));
    }
  }

  createContact(contactData) {
    console.log(contactData);
    let contactUrl = `${API_BASE_URL}/contacts`;
    if (this.reqMethod === 'PUT' && this.props.params.id) {
      contactUrl += '/' + this.props.params.id;
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
      .then(() =>  this.props.history.push('/home'))
      .catch(err => console.error('oops!'));
  }
  
  onSubmit(e) {
    e.preventDefault();
    const contactData = {
      person: e.currentTarget.person.value,
      notes: e.currentTarget.notes.value
    };
    this.createContact(contactData);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlePerson(e) {
    this.setState({
      person: this.state.person,
      notes: this.state.notes
    });
  }

  //props that is passed to the function by a parent component 
  //that can be called to tell the parent the success message, 
  //and have a state, when render is called change its state

  render(props) {
    const current = this.state;
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
              name="person" 
              value={current ? current.person: ''}
              onChange={this.onInputChange}
            required />
          </div>
          <div>
            <label htmlFor="notes">Notes*</label>
            <textarea 
              id="notes" 
              name="notes" 
              rows="15" 
              value={current ? current.notes: ''} 
              onChange={this.onInputChange} 
            ></textarea>
          </div>
        </fieldset>
        <div className="button-div">
          <button className="contact-button" type="submit" onClick={this.handlePerson}>{this.reqMethod === 'POST' ? 'Create' : 'Update'}</button>
        </div>
      </form>
    );
  }
}

//new url and success message

ContactForm.defaultProps = {
  contactLegend: 'New Contact Information',
  contactButton: 'Create', 
  type: 'POST'
};