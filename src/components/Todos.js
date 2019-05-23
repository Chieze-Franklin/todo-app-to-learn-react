import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTodos } from '../actions/todoActions';
import TodoItem from './TodoItem';

class Todos extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo} />
    )); 
  }
}

Todos.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
};

const mapDispatchToProps = {
  fetchTodos
};
const mapStateToProps = state => ({
  todos: state.todos.items
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
