import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div id='root'>
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
