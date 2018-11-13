import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {fetchContact} from '../actions';
import {Link} from 'react-router-dom';

import './styles/Contact.css';

  
class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: [],
      person: '',
      notes: ''
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.interactionText = this.interactionText.bind(this);
    this.displayInteractions = this.displayInteractions.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id)
    this.props.dispatch(fetchContact())
  }

  interactionText() {
    let noun = 'interaction';
    if (this.props.interactions.length !== 1) {noun += 's'}
    return  <div className="contact"><p className="interaction-quantity"> {this.props.interactions.length} {noun}</p></div>
  }

  displayInteractions() {
    
  }

  render(props) {
    console.log(this.props);
    let interactions = this.props.interactions;
    let interactionItems = interactions.map((interaction) => 
      <li className="interaction-list-item"><span className="interactionTitle">{interaction.title}:</span> {interaction.text}</li>
    );
    return (
      <Fragment>
        <div className="contact-border">
          <section>
            <div className='copy-container'>
              <div className='contact'>
                <p><span className="contact-person">{this.props.person}:</span> {this.props.notes}</p>
              </div>
              <div>
                <button className="interaction-detail-button">{this.interactionText()}</button>
                <ol className="interaction-items">{interactionItems}</ol>
              </div>
              <div>
                <Link className="edit-contact-link" to={`/edit-contact/${this.props.id}`}><i className="far fa-edit"></i> Edit</Link>
                <button  
                  type='submit' 
                  className ="delete-contact"
                  data-a11y-dialog-hide aria-label="Delete this contact."
                  onClick={this.handleDelete}><i className="far fa-trash-alt" ></i> Delete
                </button>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    );
  }
}

Contact.defaultProps = {
  person: '',
  notes: ''
};

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(Contact);