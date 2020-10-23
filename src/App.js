import React, { Component } from 'react';
import Todos from './Todos';
class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Learn DRF' },
      { id: 2, content: 'Learn React' },
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id!==id
    });
    this.setState({
      todos:todos,
    })
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='center blue-text'>To Dos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}
export default App;
