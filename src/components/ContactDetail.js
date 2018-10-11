import React from 'react';
import {API_BASE_URL} from '../config';
import './styles/ContactDetail.css';

export default class ContactDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: [],
      person: '',
      notes: ''
    };

    this.loadContactDetail = this.loadContactDetail.bind(this);
  }

  loadContactDetail() {
    console.log(this.props)
    this.setState({
      error: null,
      loading: true
    });
    return fetch(`${API_BASE_URL}/contacts/${this.props.id}`)
      .then(res => {
        console.log(res);
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(contactDetail => {
        this.setState({
          interactions: this.interactions,
          person: this.person, 
          notes: this.notes
        })
      })
      .catch(err =>
        this.setState({
          error: 'Could not load this contact',
          loading: false
        })
      );
  }

  render(props) {
    console.log(this.state);
    return (
      <div className="contact-detail">
        <h2 className="contact-detail-h2">{this.props.person}Contact Name</h2>
        <p className="contact-detail-p">All the contact information for this contact here.</p>
        <h2 className="contact-detail-h2">Notes</h2>
        <p className="contact-detail-p">Special notes go here regarding likes, dislikes, allergens, gifts, and important milestones. The scheduled reminders for future interactions will be noted here as well.</p>
        <h2 className="contact-detail-h2">Interaction History</h2>
        <p className="contact-detail-p">A list of emails, phone calls, texts, and visits will be displayed here.</p>
        {/* do a interactions.find for all interactions that match the id of the contact, map to render */}
      </div>
    );
  } 
}