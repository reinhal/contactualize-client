import React, {Fragment} from 'react';
import {API_BASE_URL} from '../config';
import {Link} from 'react-router-dom';
// import ContactDetail from 'ContactDetail';
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
    // this.handleContactInteractions = this.handleContactInteractions.bind(this);
    // this.interactionText = this.interactionText.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteContact(this.props.id);
  }

  // handleContactInteractions(e) {
  //   return fetch(`${API_BASE_URL}/interactions/${this.props.interactions.id}`)
  //     .then(interaction => {
  //       this.setState({
  //         title: this.state.title,
  //         text: this.state.text
  //       })
  //     })
  // }
 
  interactionText() {
    let noun = 'interaction';
    if (this.props.interactions.length !== 1) {noun + 's'}
    return  <div className="contact"><p> {this.props.interactions.length} {noun}</p></div>
  }

  render(props) {
    console.log(this.props);
    return (
      <Fragment>
        <div>
          <section>
            <div className='copy-container'>
              <div className='contact'>
                <h3><button onClick={this.handleContactInteractions} className="contact-link">{this.props.person}</button></h3>
                {/* <h3><Link onClick={this.handleContactInteractions} className="contact-link" to={`/contacts/${this.props.id}`}>{this.props.person}</Link></h3> */}
              </div>
              <div className="contact-notes">
                <p>{this.props.notes}</p>
              </div> 
              {this.interactionText()}
              {/* {this.handleContactInteractions()} */}
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