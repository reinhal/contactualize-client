import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Contact.css';

  
export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interactions: [],
      person: '',
      notes: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleContactDetail = this.handleContactDetail.bind(this);
    this.interactionNumber = this.interactionNumber.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id);
  }

  handleContactDetail(e) {
    this.setState({
      interactions: this.state.interactions,
      person: this.state.person, 
      notes: this.state.notes
    })
  }
 
  interactionNumber() {
    if (this.props.interactions.length === 1) {
      return  <div className="contact"><p> {this.props.interactions.length} interaction</p></div>
    } else {
      return  <div className="contact"><p> {this.props.interactions.length} interactions</p></div>
    }
  }

  render(props) {
    console.log(this.props);
    return (
      <div>
        <section>
          <div className='copy-container'>
            <div className='contact'>
              <h3><Link onClick={this.handleContactDetail} className="contact-link" to={`/contacts/${this.props.id}`}>{this.props.person}</Link></h3>
            </div>
            <div className="contact-notes">
              <p>{this.props.notes}</p>
            </div>
             {this.interactionNumber}
              {/* add a if statement for more than one interaction */}
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
    );
  }
}

Contact.defaultProps = {
  person: '',
  notes: ''
};

// router: do conditionals based on what is in url bar: if the route in the url matches 
// a known component it will render that component