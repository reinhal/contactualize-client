import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import RegistrationPage from './RegistrationPage';
import ContactForm from './ContactForm';
import LandingPage from './LandingPage';
import ContactList from './ContactList';
import InteractionForm from './InteractionForm';
import InteractionList from './InteractionList'; 

export default class Main extends React.Component {  
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' 
          component={(props) => <LandingPage {...props.match}/>}
          />
          <Route exact path='/home' 
          component={() => <Home /> }
          />
          <Route exact path='/register' 
          component={(props) => <RegistrationPage {...props.match} history={props.history}/> }
          />
          <Route exact path='/new-contact' 
          component={(props) => <ContactForm contactLegend="Create a New Contact" contactButton="Create" type="POST" {...props.match} history={props.history} /> }
          />
          <Route 
          exact path='/contacts' 
          component={(props) => <ContactList {...props.match} history={props.history}/>}
          />
          <Route 
          exact path='/record-interaction' 
          component={(props) => <InteractionForm interactionLegend="Record a New Interaction" interactionButton="Create" type="POST" {...props.match} history={props.history}/>}
          />
          <Route 
          exact path='/interactions' 
          component={(props) => <InteractionList {...props.match}/>}
          />
          <Route 
          path='/edit-contact/:id' 
          render={(props) => <ContactForm contactLegend="Update Contact Information" contactButton="Update" type="PUT" {...props.match} history={props.history}/> }
          />
          <Route 
          path='/edit-interaction/:id' 
          component={(props, index) => <InteractionForm key={index} interactionLegend="Update Interaction" interactionButton="Update" type="PUT" {...props.match} history={props.history}/> }
          />
        </Switch>
      </div>
    );
  }  
}  

