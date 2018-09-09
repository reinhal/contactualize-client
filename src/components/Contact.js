import React from 'react';
import DeleteContact from './DeleteContact';
import EditContact from './EditContact';
import {Link} from 'react-router-dom';
import './styles/Contact.css';

  
export default function Contact(props){
  return (
    <div>
      <section>
        <div className='copy-container'>
          <div className='contact'>
          <DeleteContact />
          <EditContact />
            <h2><Link to="/contacts/{props.person}">{props.person}</Link></h2>
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