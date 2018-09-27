import React from 'react';
import {API_BASE_URL} from '../config';
import "./styles/Delete.css";

export default class DeleteContact extends React.Component {

  deleteContact() {
    return fetch(`${API_BASE_URL}/contacts/${this.props.contactID}`, {
      method: 'DELETE'
    })
  }

  onClick(e) {
    e.preventDefault();
    window.location.reload(true);
    this.deleteContact();
  }
  
  render() {
    return (
      <div>
        <button  
          type="submit" 
          className ="delete-item"
          data-a11y-dialog-hide aria-label="Delete this contact."
          onClick={e => this.onClick(e)}><i className="far fa-trash-alt" ></i> Delete</button>
      </div>
    );
  } 
}