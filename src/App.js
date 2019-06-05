import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import About from './components/pages/About';
import AddTodo from './components/AddTodoFunctionComponent';
import Header from './components/layout/Header';
import Help from './components/pages/Help';
import store from './store';
import Todos from './components/Todos';

import { Provider as AppContextProvider, Consumer } from './context';
import { Provider as MyOwnProvider } from './my-own-redux';
import store2 from './my-own-redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <MyOwnProvider store={store2}>
                <Header />
                <Route path="/" exact render={props => {
                  return (<React.Fragment>
                    <AddTodo />
                    <Todos />
                  </React.Fragment>)}} />
                <Route path="/about" component={About} />
                <Route path="/help" component={Help} />
              </MyOwnProvider>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
