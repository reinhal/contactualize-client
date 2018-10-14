import React, {Fragment} from 'react';
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
    this.interactionText = this.interactionText.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id);
  }

  interactionText() {
    let noun = 'interaction';
    if (this.props.interactions.length !== 1) {noun + 's'}
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
              <div><button className="interaction-detail">{this.interactionText()}</button></div>
              <li>{this.props.interactions.title}</li>
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

// router: do conditionals based on what is in url bar: if the route in the url matches 
// a known component it will render that component