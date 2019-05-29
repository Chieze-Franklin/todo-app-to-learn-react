import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import About from './components/pages/About';
import AddTodo from './components/AddTodoFunctionComponent';
import Header from './components/layout/Header';
import store from './store';
import Todos from './components/Todos';

import { Provider as AppContextProvider, Consumer } from './context';

class App extends Component {
  state = {
    appName: 'TodoList'
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className="container">
              <AppContextProvider>
                <Header />
                <Route path="/" exact render={props => {
                  return (<Consumer>
                    {value => {
                      const { currentPage, dispatch } = value;
                      if (currentPage !== 'home') {
                        dispatch({
                          type: 'PAGE_CHANGED',
                          payload: 'home'
                        })
                      }
                      return (<React.Fragment>
                        <AddTodo />
                        <Todos />
                      </React.Fragment>)
                    }}
                  </Consumer>)}} />
                <Route path="/about" component={About} />
              </AppContextProvider>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
