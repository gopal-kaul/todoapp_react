import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
  state = {
    todos: [
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos,
    })
  }
  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos , todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className='App container'>
        <h1 className='center blue-text'>To Dos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App;
