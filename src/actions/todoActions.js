import axios from 'axios';

import { CREATE_TODO, DELETE_TODO, FETCH_TODOS, TOGGLE_TODO } from './types';

export const createTodo = (title) => (dispatch) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res => {
      dispatch({
        type: CREATE_TODO,
        payload: res.data
      })
    });
};

export const deleteTodo = (id) => (dispatch) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_TODO,
        payload: id
      })
    });
};

export const fetchTodos = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      dispatch({
        type: FETCH_TODOS,
        payload: res.data
      })
    });
};

export const toggleTodo = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_TODO,
    payload: id
  })
};
