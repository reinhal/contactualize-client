import React from 'react';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';
import {Link} from 'react-router-dom';
import './styles/Contact.css';

  
export default function Contact(props) { 
  console.log(props);
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
          {/* <EditContact contactID={props.id}/> */}
            <h2><Link className="contact-link" to="/contacts/{props.person}">{props.person}</Link></h2>
            <p>{props.notes}</p>
            <h2><Link className="edit-contact-link" to={`/edit-contact/${props.id}`}><i class="far fa-edit"></i> Edit</Link></h2>
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