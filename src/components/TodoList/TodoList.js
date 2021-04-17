import React from 'react';
import Todo from '../Todo/Todo.js';
import './todo-list.scss';

function TodoList({todos, handleSetTodos}) {
  return (
    <div className="todo-list">
      {
        todos.map(todo => {
          return (
            <Todo
              handleSetTodos={handleSetTodos}
              data={todo}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList;
