import React from 'react';
import DeleteContact from './DeleteContact';
import {Link} from 'react-router-dom';
import './styles/Contact.css';

  
export default function Contact(props) {
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
            <h3><Link className="contact-link" to="/contacts/{props.person}">{props.person}</Link></h3>
            <p>{props.notes}</p>
            <p>3 interactions</p>
            <div><Link className="edit-contact-link" to={`/edit-contact/${props.id}`}><i className="far fa-edit"></i> Edit</Link></div>
            <DeleteContact className="delete-contact-link" contactID={props.id}/>
          </div>
        </div>
      </section>
    </div>
  );
}

Contact.defaultProps = {
  person: '',
  notes: ''
};

// router: do conditionals based on what is in url bar: if the route in the url matches 
// a known component it will render that component