// make a functional stateless component to render priority, todo name, and 3 buttons (delete, +, and -)

import React from 'react';

const TodoListEntry = (props) => {
  // deconstruct props
  const { todo, deleteTodo, updateTodo } = props;
  return (
    <div>
      <div>
        {todo.priority}
        {todo.name}
        {/* note id is passed into the delete function */}
        <button type="button" onClick={() => deleteTodo()}>Delete</button>
        <button type="button" onClick={() => updateTodo(todo._id, todo.priority + 1)}>+</button>
        <button type="button" onClick={() => updateTodo(todo._id, todo.priority - 1)}>-</button>
      </div>
    </div>
  )
}

export default TodoListEntry