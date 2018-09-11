import React from 'react';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import EditContactForm from './EditContactForm';
import './styles/AddContactForm.css';


export default function EditContact() {
  return (
    <Router>
      <div>
        <button 
          className ="edit-contact" 
          type="submit" 
          data-a11y-dialog-hide aria-label="Edit this contact.">
          <Route path="/contacts/this.props.contactID" component={EditContactForm} />
          <i className="far fa-edit"></i>
          Edit
        </button>
      </div>
    </Router> 
  );
}
//react router