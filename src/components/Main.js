import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import ContactForm from './ContactForm';
import LandingPage from './LandingPage';
import ContactList from './ContactList';
import InteractionForm from './InteractionForm';
import InteractionList from './InteractionList'; 

export default function Main(props) {
  // currentContact = props.currentContact;
  // currentInteraction = props.currentInteraction;
  return (
    <div>
      <Switch>
        <Route exact path='/' 
        component={ () => <LandingPage message={'hello'}/>}
        />
        <Route 
        exact path='/home' 
        component={Home}
        />
        <Route exact path='/new-contact' 
        component={(props) => <ContactForm contactLegend="Create a New Contact" contactButton="Create" type="POST" /> }
        />
        <Route 
        exact path='/contact-list' 
        component={(props) => <ContactList {...props}/>}
        />
        <Route 
        exact path='/record-interaction' 
        component={(props) => <InteractionForm interactionLegend="Record a New Interaction" interactionButton="Create" type="POST" />}
        />
        <Route 
        exact path='/interactions' 
        component={(props) => <InteractionList {...props}/>}
        />
        <Route 
        path='/edit-contact/:id' 
        render={(props) => <ContactForm contactLegend="Update Contact Information" contactButton="Update" type="PUT" {...props.match} history={props.history}/> }
        />
        <Route 
        path='/edit-interaction/:id' 
        component={(props) => <InteractionForm interactionLegend="Update Interaction" interactionButton="Update" type="PUT" {...props.match} history={props.history}/> }
        />
      </Switch>
    </div>
  );
}  
