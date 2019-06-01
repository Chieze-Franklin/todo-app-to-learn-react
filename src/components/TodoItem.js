import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteTodo, toggleTodo } from '../actions/todoActions';

class TodoItemStyle {
  backgroundColor = '#f4f4f4'
  borderBottom = '1px #ccc dotted'
  padding = '10px'
}

class TodoItemCompletedStyle extends TodoItemStyle {
  textDecoration = 'line-through'
}

class TodoItemNotCompletedStyle extends TodoItemStyle {
  textDecoration = 'none'
}

const completedStyle = new TodoItemCompletedStyle();
const notCompletedStyle = new TodoItemNotCompletedStyle();
const btnStyle = {
  backgroundColor: '#ff0000',
  color: '#ffffff',
  boarder: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
};

export class TodoItem extends Component {
  getStyle = () => this.props.todo.completed ? completedStyle : notCompletedStyle;
  render() {
    const { todo, deleteTodo, toggleTodo } = this.props;
    let modifiedTodo = this.props.todos.find(t => t.id === todo.id);
    const { id, completed, title } = modifiedTodo || todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={toggleTodo.bind(this, id)} checked={completed} /> {' '}
          {title}
          <button style={btnStyle} onClick={deleteTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  deleteTodo,
  toggleTodo
};

const mapStateToProps = state => ({
  todos: state.todos.items
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
