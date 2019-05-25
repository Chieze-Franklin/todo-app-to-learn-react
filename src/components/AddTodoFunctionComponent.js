import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createTodo } from '../actions/todoActions';

function AddTodo(props) {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    props.createTodo(title);
    setTitle('');
  }

  return (
    <form style={{ display: "flex" }} onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Add ToDo"
        style={{flex: "10", padding: "10px"}}
        value={title}
        onChange={onChange} />
      <input
        type="submit"
        value="submit"
        className="btn"
        style={{flex: "1"}} />
    </form>
  )
}

const mapDispatchToProps = {
  createTodo
};

export default connect(null, mapDispatchToProps)(AddTodo)
