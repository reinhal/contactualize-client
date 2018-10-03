import React from 'react';
import "./styles/Delete.css";

export default class DeleteContact extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <button  
          type='submit' 
          className ="delete-item"
          data-a11y-dialog-hide aria-label="Delete this contact."
          onClick={this.handleDelete}><i className="far fa-trash-alt" ></i> Delete</button>
      </div>
    );
  } 
}