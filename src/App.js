import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <body>
            <div className="App">
              <Header />
              <main role="main">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/home" component={Home} />
              </main>
            </div>
          </body>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
