import React from 'react';
import {API_BASE_URL} from '../config';
import { soFetch } from '../utils/index';

import './styles/InteractionForm.css';

export default class InteractionForm extends React.Component {
  constructor(props) {
    super(props);

    this.reqMethod = this.props.type;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);
    this.createInteraction = this.createInteraction.bind(this);


    this.state = {
      contacts: [],
      interactions: []
    }
  }

  componentDidMount() {
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

  createInteraction(interactionData) {
    console.log(interactionData);
    let interactionUrl = `${API_BASE_URL}/interactions`;
    if (this.reqMethod === 'PUT' && this.props.params.id) {
      interactionUrl += '/' + this.props.params.id;
    }

    const opts = {
      method: this.reqMethod, 
      body: JSON.stringify(interactionData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    };

    return soFetch(`${interactionUrl}`, opts)
      .then(data => console.log(data))
      .then(() =>  this.props.history.push('/home'))
      .catch(err => console.error('oops!', err));
  }
  
  onSubmit(e) {
    e.preventDefault();
    const interactionData = {
      person_id: e.currentTarget.person_id.value,
      title: e.currentTarget.title.value,
      text: e.currentTarget.text.value
    };
    this.createInteraction(interactionData);
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleInteraction(e) {
    this.setState({
      person_id: this.state.person_id,
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