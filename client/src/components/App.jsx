import React, { Component } from 'react';
import TodoListEntry from './TodoListEntry.jsx';
import axios from 'axios';

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: 0,
      todos: [],
    };

  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    
  }

  postTodo() {
    
  }

  deleteTodo(_id) {
    
  }

  updateTodo(index, change) {
    
  }

  handleSubmit(event) {
    
  }

  handleChange(event) {
    
  }

  render() {

    return (
      <div>
        <h1>Todo List</h1>
        <form>
          Todo:
          <input type="text" name="todo" />
          Priority:
          <input type="number" name="priority" />
          <button type="button">Submit</button>
        </form>
        <div>
        <TodoListEntry />
        </div>
      </div>
    );
  }
}