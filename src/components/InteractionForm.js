import React from 'react';
import { connect } from 'react-redux';
import {addInteraction, updateInteraction, fetchContact, fetchThisInteraction, fetchInteraction} from '../actions';
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
    console.log('PARAMS', this.props.params);
    if (Object.keys(this.props.params).length !== 0) {
      this.props.dispatch(fetchThisInteraction(this.props.params.id))
    }
    this.props.dispatch(fetchContact())
  }
  
  onSubmit(e) {
    e.preventDefault();
    const interactionData = {
      person_id: e.currentTarget.person_id.value,
      title: e.currentTarget.title.value,
      text: e.currentTarget.text.value,
      id: this.props.params.id
    };
    let reqAction;
    if (this.reqMethod === 'PUT') {
      reqAction = updateInteraction;
    } else { reqAction = addInteraction}
    this.props.dispatch(reqAction(interactionData,(interaction) => {
      this.props.history.push('/home')
    }));
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleInteraction(e) {
    this.setState({
      person_id: this.props.person_id,
      title: this.props.title,
      text: this.props.text
    });
  }

  render() {
    console.log(this.props);
    let contacts = this.props.contacts;
    let optionItems = contacts.map((contact) => 
      <option key= {`contact-${contact.id}`} value={contact.id}>{contact.person}</option>
    );
    let interactions = this.props.interactions;
    // let currentValue = this.props.interaction;
    // console.log(currentValue);
    let currentValue = () => {
        interactions.map((interaction) => {
          if(this.props.params === this.props.interactions.id) {
            return interaction;
            // console.log(this.props.params, interaction);
          }
        })
      };
    console.log(currentValue());
      return (
        <form id="create-interaction" onSubmit={e => this.onSubmit(e)}>
          <fieldset className="interaction-form">
            <legend>
            {this.reqMethod === 'POST'
              ? 'Add Interaction'
              : 'Update Interaction'}
            </legend>
            <div>
              <label className="interaction-form-label" htmlFor="Contact">Contact*</label>
              <select name="person_id">
                {optionItems}
              </select>
            </div>
            <div>
              <label className="interaction-form-label" htmlFor="title">Title*</label>
              <input 
                id="title"
                name="title"
                type="text"
                className="newTitle" 
                value={currentValue ? currentValue.title: ''}
                onChange={this.onInputChange}
              required />
            </div>
            <div>
              <label className="interaction-form-label" htmlFor="text">Text*</label>
              <textarea 
                id="text" 
                name="text"
                rows="10"
                value={currentValue ? currentValue.text: ''}
                onChange={this.onInputChange}
                ></textarea>
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
  interactions: state.contactReducer.interactions,
  contacts: state.contactReducer.contacts
});

export default connect(mapStateToProps)(InteractionForm);