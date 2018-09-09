import React from 'react';
import {Link} from 'react-router-dom';
import './styles/NewInteractionForm.css';

export default function EditContact() { 
  return (
    <div>
      <button 
        className ="edit-interaction" 
        type="submit" 
        data-a11y-dialog-hide aria-label="Edit this interaction.">
        <Link to="/edit-interaction"><i className="far fa-edit"></i>
         Edit</Link>
      </button>
    </div>
  );
}