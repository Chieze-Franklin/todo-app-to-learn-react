import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
    const { todo, toggleComplete, deleteTodo } = this.props;
    const { id, title } = todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={toggleComplete.bind(this, id)} checked={todo.completed} /> {' '}
          {title}
          <button style={btnStyle} onClick={deleteTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

export default TodoItem
