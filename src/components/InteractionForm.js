import React from 'react';
import { connect } from 'react-redux';
import {addInteraction, updateInteraction, fetchContact, fetchThisInteraction} from '../actions';
import './styles/InteractionForm.css';

export class InteractionForm extends React.Component {
  constructor(props) {
    super(props);

    this.reqMethod = this.props.type;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handleInteraction = this.handleInteraction.bind(this);

    this.state = {
      contacts: [],
      person_id: props.interaction.person_id,
      title: props.interaction.title,
      text: props.interaction.text
    }
  }

  componentDidMount() {
    if (Object.keys(this.props.params).length !== 0) {
      this.props.dispatch(fetchThisInteraction(this.props.params.id))
    }
    this.props.dispatch(fetchContact())
  }

  componentWillReceiveProps(nextProps, prevProps) {
    this.setState({
      person_id: nextProps.interaction.person_id,
      title: nextProps.interaction.title,
      text: nextProps.interaction.text 
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    this.handleInteraction();
    const interactionData = {
      person_id: this.state.person_id,
      title: this.state.title,
      text: this.state.text,
      id: this.props.params.id,
      userId: this.props.interaction.userId
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
      person_id: this.state.person_id,
      title: this.state.title,
      text: this.state.text
    });
  }

  render() {
    let contacts = this.props.contacts;
    let optionItems = contacts.map((contact, idx) => 
    <option 
      key= {`contact-${contact.id}`} 
      value={contact.id}
      selected={idx === 0}
    >
      {contact.person}
    </option>
    );
    let currentValue = this.props.interaction;
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
            <select name="person_id" onChange={this.onInputChange}>
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
              value={currentValue ? this.state.title: ''}
              // onChange={this.onInputChange}
              onChange={(e) => this.setState({title: e.currentTarget.value})}
            required />
          </div>
          <div>
            <label className="interaction-form-label" htmlFor="text">Text*</label>
            <textarea 
              id="text" 
              name="text"
              rows="10"
              value={currentValue ? this.state.text: ''}
              // onChange={this.onInputChange}
              onChange={(e) => this.setState({text: e.currentTarget.value})}
              ></textarea>
          </div>
        </fieldset>
        <div className="button-div">
          <button className="interaction-button" type="submit">{this.reqMethod === 'POST' ? 'Create' : 'Update'} </button>
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
  contacts: state.contactReducer.contacts,
  interaction: state.contactReducer.interaction
});

export default connect(mapStateToProps)(InteractionForm);