import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config';
import { soFetch } from '../utils/index';
import {required, nonEmpty, email} from '../validators';
import {addContact, updateContact} from '../actions';
import './styles/ContactForm.css';

//when do I hook up to mLab

class ContactForm extends React.Component {
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

  onSubmit(e) {
    e.preventDefault();
    const contactData = {
      person: e.currentTarget.person.value,
      notes: e.currentTarget.notes.value, 
      id: this.props.params.id
    };
    let reqAction;
    if (this.reqMethod === 'PUT') {
      reqAction = updateContact;
    } else { reqAction = addContact}
    this.props.dispatch(reqAction(contactData))
    this.props.history.push('/home');
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

  render() {
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
              className ="newNotes" 
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

ContactForm.defaultProps = {
  contactLegend: 'New Contact Information',
  contactButton: 'Create', 
  type: 'POST'
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(ContactForm);