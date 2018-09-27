import React from 'react';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';
import {Link} from 'react-router-dom';
import './styles/Contact.css';

  
export default function Contact(props) { 
  console.log(Contact);
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
          <DeleteContact contactID={props.id}/>
          {/* <EditContact contactID={props.id}/> */}
            <h2><Link to="/contacts/{props.person}">{props.person}</Link></h2>
            <h2><Link to="/edit-contact/{contactID}">Edit</Link></h2>
            <p>{props.notes}</p>
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