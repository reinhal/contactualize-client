import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import { connect } from 'react-redux';
import {API_BASE_URL} from '../config';
import { soFetch } from '../utils/index';
import {required, nonEmpty, email} from '../validators';
import {addInteraction, updateInteraction} from '../actions';
import './styles/InteractionForm.css';

import './styles/InteractionForm.css';

class InteractionForm extends React.Component {
  constructor(props) {
    super(props);

    this.reqMethod = this.props.type;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);

    this.state = {
      contacts: [],
      title: '',
      text: ''
    }
  }

  componentDidMount() {
    console.log('checking it here:', this.props.params);
    if (this.props.params !== undefined) {
      soFetch(`${API_BASE_URL}/interactions/${this.props.params.id}`)
      .then(data => this.setState({ person_id: data.person_id, title: data.title, text: data.text}));
    }
    return fetch(`${API_BASE_URL}/contacts`)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          contacts: data,
        });
      });
  }
  
  onSubmit(e) {
    let contacts = this.state.contacts;
    let contactPerson = contacts.map((contact) => 
       contact.person
     );
    e.preventDefault();
    const interactionData = {
      person_id: e.currentTarget.person_id.value,
      person: {contactPerson},
      title: e.currentTarget.title.value,
      text: e.currentTarget.text.value,
      id: this.props.params.id
    };
    let reqAction;
    if (this.reqMethod === 'PUT') {
      reqAction = updateInteraction;
    } else { reqAction = addInteraction}
    this.props.dispatch(reqAction(interactionData))
    .then(() => this.props.history.push('/home'))
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleInteraction(e) {
    this.setState({
      person_id: this.state.person_id,
      person: this.state.person,
      title: this.state.title,
      text: this.state.text
    });
  }

  render() {
     let contacts = this.state.contacts;
     let optionItems = contacts.map((contact) => 
       <option value={contact.id}>{contact.person}</option>
     );
    const defaultValues = this.state;
      return (
        <form id="create-interaction" onSubmit={e => this.onSubmit(e)}>
          <fieldset className="interaction-form">
            <legend>
            {this.reqMethod === 'POST'
              ? 'Add Interaction'
              : 'Update Interaction'}
            </legend>
            <div>
              <label htmlFor="Contact">Contact*</label>
              <select name="person_id">
                {optionItems}
              </select>
            </div>
            <div>
              <label htmlFor="title">Title*</label>
              <input 
                id="title" 
                className="newTitle" 
                type="text" 
                name="title" 
                defaultValue={defaultValues ? defaultValues.title: ''}
                onChange={this.onInputChange}
              required />
            </div>
            <div>
              <label htmlFor="text">Text*</label>
              <textarea id="text" name="text" rows="10" defaultValue={defaultValues ? defaultValues.text: ''}></textarea>
            </div>
          </fieldset>
          <div className="button-div">
            <button className="interaction-button" type="submit" onClick={this.handleInteraction}>{this.reqMethod === 'POST' ? 'Create' : 'Update'} </button>
          </div>
        </form>
    );
  }
}

InteractionForm.defaultProps = {
  interactionLegend: "Record a New Interaction",
  interactionButton: "Create", 
  type: 'POST'
}
const mapStateToProps = state => ({
  interactions: state.interactions
});

export default connect(mapStateToProps)(InteractionForm);