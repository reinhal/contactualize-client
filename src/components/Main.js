import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import AddContactForm from './AddContactForm';
import LandingPage from './LandingPage';
import ContactList from './ContactList';
import NewInteractionForm from './NewInteractionForm';
import InteractionList from './InteractionList'; 

export default function Main() {
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
        component={AddContactForm}
        />
        <Route 
        exact path='/contact-list' 
        component={(props) => <ContactList {...props}/>}
        />
        <Route 
        exact path='/record-interaction' 
        component={NewInteractionForm}
        />
        <Route 
        exact path='/interactions' 
        component={(props) => <InteractionList {...props}/>}
        />
      </Switch>
    </div>
  );
}  
