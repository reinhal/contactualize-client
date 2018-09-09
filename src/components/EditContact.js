import React from 'react';
import {Link} from 'react-router-dom';
import './styles/AddContactForm.css';


export default function EditContact() {
  return (
    <div>
      <button 
        className ="edit-contact" 
        type="submit" 
        data-a11y-dialog-hide aria-label="Edit this contact.">
        <Link to="/edit-contact"><i className="far fa-edit"></i>
         Edit</Link>
      </button>
    </div>
  );
}
