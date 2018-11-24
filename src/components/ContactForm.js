import React from 'react';
import { connect } from 'react-redux';
import {addContact, updateContact, fetchThisContact} from '../actions';
// import {API_BASE_URL} from '../config';
// import { soFetch } from '../utils/index';
import './styles/ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.reqMethod = this.props.type;
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.handlePerson = this.handlePerson.bind(this);
    console.log('CONTACT PROPS', props);
    // this.state = {
    //   person: props.contact.person,
    //   notes: props.contact.notes
    // }
    this.state = {
      person: '',
      notes: ''
    }
  }
// look at reqMethod conidtionals and how/when state is being used
  componentDidMount() {
    if (Object.keys(this.props.params).length !== 0) {
      this.props.dispatch(fetchThisContact(this.props.params.id))
    }
  }

  componentWillReceiveProps(nextProps, prevProps) {
    console.log('NEXT PROPS', nextProps);
    this.setState({
      title: nextProps.contact.title,
      text: nextProps.contact.text 
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.props);
    const contactData = {
      person: this.state.person,
      notes: this.state.notes, 
      id: this.props.params.id,
      userId: this.props.contacts.userId
    };
    let reqAction;
    if (this.reqMethod === 'PUT') {
      reqAction = updateContact;
    } else { reqAction = addContact}
    this.props.dispatch(reqAction(contactData,(contact) => {
      this.props.history.push('/home');
    }));
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

  render() {
    console.log("props", this.props);
    console.log('state', this.state);
    let current = this.props.contact;
    return (
      <form id="create-contact" onSubmit={e => this.onSubmit(e)}>
        <fieldset className="contact-form">
          <legend>
            {this.reqMethod === 'POST'
              ? 'Add a Contact'
              : 'Update Contact Information'}
          </legend>
          <div>
            <label className="contact-form-label" htmlFor="person">Name*</label>
            <input 
              id="person" 
              className="newName" 
              type="text" 
              name="person" 
              value={current ? this.state.person: ''}
              // onChange={this.onInputChange}
              onChange={(e) => this.setState({person: e.currentTarget.value})}
            required />
          </div>
          <div>
            <label className="contact-form-label" htmlFor="notes">Notes*</label>
            <textarea 
              id="notes" 
              name="notes"
              className ="newNotes" 
              rows="15" 
              value={current ? this.state.notes: ''} 
              // onChange={this.onInputChange} 
              onChange={(e) => this.setState({notes: e.currentTarget.value})}
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
  contacts: state.contactReducer.contacts
});

export default connect(mapStateToProps)(ContactForm);