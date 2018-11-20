import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import {NavLink} from 'react-router-dom';
import './styles/NavBar.css';

export class NavBar extends React.Component{
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  } 

  render() {
    let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <button className="logout-link" onClick={() => this.logOut()}>Log Out</button>
            )
        }
    return (
      <div>
        <nav role="naviagtion">
          <ul>
            <li>{logOutButton}</li>
            <li className="nav-link" ><NavLink to="/home">Home</NavLink></li>
            <li className="nav-link" ><NavLink to="/new-contact">+ Contact</NavLink></li>
            <li className="nav-link" ><NavLink to="/record-interaction">+ Interactions</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavBar);