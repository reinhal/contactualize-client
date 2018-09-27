import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import ContactForm from './ContactForm';
import EditContactForm from './EditContactForm';
import EditInteractionForm from './EditInteractionForm';
import LandingPage from './LandingPage';
import ContactList from './ContactList';
import AddInteractionForm from './AddInteractionForm';
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
        component={(props) => <ContactForm contactLegend="Create a New Contact" contactButton="Create" /> }
        />
        <Route 
        exact path='/contact-list' 
        component={(props) => <ContactList {...props}/>}
        />
        <Route 
        exact path='/record-interaction' 
        component={AddInteractionForm}
        />
        <Route 
        exact path='/interactions' 
        component={(props) => <InteractionList {...props}/>}
        />
        <Route 
         path='/edit-contact/:id' 
        component={(props) => <ContactForm contactLegend="Update Contact Information" contactButton="Update" /> }
        />
        <Route 
        exact path='/edit-interaction' 
        component={(props) => <AddInteractionForm interactionLegend="Update Interaction" interactionButton="Update" /> }
        />
      </Switch>
    </div>
  );
}  
