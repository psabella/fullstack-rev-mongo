// make a functional stateless component to render priority, todo name, and 3 buttons (delete, +, and -)

import React from 'react';

const TodoListEntry = () => {
  
  return (
    <div>
      <div>
        10
        remove hard coded todos
        <button type="button">Delete</button>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
      <div>
        10
        Make react work
        <button type="button">Delete</button>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
      <div>
        10
        Why must you be this way?
        <button type="button">Delete</button>
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
    </div>
  )
}

export default TodoListEntry