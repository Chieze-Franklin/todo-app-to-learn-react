import React, { useState } from 'react';

function AddTodo() {
  const [title, setTitle] = useState();
}

export default AddTodo;
// ----------------------------------------
// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { createTodo } from '../actions/todoActions';

// export class AddTodo extends Component {
//   state = {
//     title: ''
//   }
//   onChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }
//   onSubmit = (e) => {
//     e.preventDefault();
//     this.props.createTodo(this.state.title);
//     this.setState({
//       title: ''
//     });
//   }
//   render() {
//     return (
//       <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Add ToDo"
//           style={{flex: "10", padding: "10px"}}
//           value={this.state.title}
//           onChange={this.onChange} />
//         <input
//           type="submit"
//           value="submit"
//           className="btn"
//           style={{flex: "1"}} />
//       </form>
//     )
//   }
// }

// const mapDispatchToProps = {
//   createTodo
// };

// export default connect(null, mapDispatchToProps)(AddTodo)
