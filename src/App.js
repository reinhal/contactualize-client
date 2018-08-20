import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import Home from './Home';
import Footer from './Footer';
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
