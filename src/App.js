import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div id='root'>
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
