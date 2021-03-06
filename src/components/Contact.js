import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import './styles/Contact.css';

  
export class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: [],
      person: '',
      notes: '', 
      userId: '',
      displayed: true
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.interactionText = this.interactionText.bind(this);
    this.displayInteractions = this.displayInteractions.bind(this);
    this.showHideInteractions = this.showHideInteractions.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id)
  }

  interactionText() {
    let noun = 'interaction';
    if (this.props.interactions === undefined) {
      noun += 's'
      return  <div className="contact"><p className="interaction-quantity"> 0 {noun}</p></div>
    } else if (this.props.interactions.length !== 1) {
      noun += 's'
      return  <div className="contact"><p className="interaction-quantity"> {this.props.interactions.length} {noun}</p></div>
    } else {
      return <div className="contact"><p className="interaction-quantity"> {this.props.interactions.length} {noun}</p></div>
    }
  }

  displayInteractions() {
    if (!this.state.displayed){
      this.setState({
        displayed: true
      })
    } else {
      this.setState({
        displayed: false
      })
    }
  }

  showHideInteractions() {
    if (!this.state.displayed) {
      return  <button className="interaction-detail-button" onClick={this.displayInteractions}> {this.interactionText()}⬆︎</button>
    } else  {
      return <button className="interaction-detail-button" onClick={this.displayInteractions}> {this.interactionText()}⬇︎</button>
    }
  }

  render() {
    let interactions = this.props.interactions;
    let interactionItems = () => {
      if(Array.isArray(interactions)) {
        if(interactions.length >= 1){
          return interactions.map((interaction) => 
          <li key= {`interaction-${interaction.id}`} className="interaction-list-item"><span className="interactionTitle">{interaction.title}:</span> {interaction.text}</li>
        )};
      }
    }
    return (
      <Fragment>
        <div className="contact-border">
          <section>
            <div className='copy-container'>
              <div className='contact'>
                <p><span className="contact-person">{this.props.person}:</span> {this.props.notes}</p>
              </div>
              <div>
                {this.showHideInteractions()}
                {/* <button className="interaction-detail-button" onClick={this.displayInteractions}>{this.interactionText()}</button> */}
              <ol className={this.state.displayed ? "interaction-items" : ""}>{interactionItems()}</ol>
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
  contacts: state.contactReducer.contacts
});

export default connect(mapStateToProps)(Contact);