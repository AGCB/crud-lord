import React from 'react';
import './todo.scss';

function Todo({data, handleSetTodos}) {
  function handleDeleteClick() {
    handleSetTodos(data);
  }

  function handleEditClick() {

  }
  return (
    <div className="todo-wrapper">
      <span className="todo">{data}</span>
      <button onClick={handleDeleteClick}>🍭</button>
      <button onClick={handleEditClick}>edit</button>
    </div>
  )
}
export default Todo;
