import React from 'react';
import './styles/ContactForm.css';
import { Link } from 'react-router-dom';

export default class EditContact extends React.Component {
  onClick(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <p><Link to='/contacts/{this.props.contactID}'>Edit</Link></p>
        {/* Link would reference the Route with the contactID at the end of URL,  */}
        
        {/* <button 
          className ="edit-contact" 
          type="submit" 
          data-a11y-dialog-hide aria-label="Edit this contact.">
          Edit
        </button> */}
      </div>
    );
  }
}
