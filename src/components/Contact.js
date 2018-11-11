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
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id)
    this.props.dispatch(fetchContact())
  }

  // displayInteractions(e) {
  //   var hideButton = {
  //     display: "none"
  //   }
  //   e.preventDefault();
  //   return <div>
  //       <button style={hideButton} onClick={this.displayInteractions} className="interaction-detail-button">{this.interactionText()}</button>
  //     </div>
  //     const interactions = this.props.contacts.interactions.map((interaction, index) => (
  //       <li className="interaction-item" key={index}>{...interaction}</li>
  //     ));
  // }

  interactionText() {
    let noun = 'interaction';
    if (this.props.interactions.length !== 1) {noun += 's'}
    return  <div className="contact"><p className="interaction-quantity"> {this.props.interactions.length} {noun}</p></div>
  }

  render(props) {
    console.log(this.props);
    return (
      <Fragment>
        <div>
          <section>
            <div className='copy-container'>
              <div className='contact'>
                <h3 className="contact-person">{this.props.person}</h3>
              </div>
              <div className="contact-notes">
                <p>{this.props.notes}</p>
              </div>
              <div><button className="interaction-detail-button">{this.interactionText()}</button></div>
              <div className="interaction-detail"></div>
              <div><Link className="edit-contact-link" to={`/edit-contact/${this.props.id}`}><i className="far fa-edit"></i> Edit</Link></div>
              <div>
                <button  
                  type='submit' 
                  className ="delete-item"
                  data-a11y-dialog-hide aria-label="Delete this contact."
                  onClick={this.handleDelete}><i className="far fa-trash-alt" ></i> Delete</button>
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