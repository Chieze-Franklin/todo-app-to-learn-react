import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import store from './store';
import Todos from './components/Todos';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route path="/" exact render={props => (
                <React.Fragment>
                  <AddTodo />
                  <Todos />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
