import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from './store';

import App from './App';
import TodoItem from './components/TodoItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('TodoItem renders correctly', () => {
  const todo = {
    id: '1',
    title: 'Todo 1',
    completed: false
  }
  const tree = renderer
    .create(<Provider store={store}><TodoItem todo={todo} /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
