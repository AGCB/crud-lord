import React, { useState } from 'react';
import logo from './logo.svg';
import TodoList from './components/TodoList/';
import './App.scss';
import initialTodos from './data.js'
function App() {
  const [todos,setTodos] = useState(initialTodos)

  function handleSetTodos(chosenTodo) {
    setTodos(todos.filter(todo => todo !== chosenTodo))
  }
  return (
    <div className="App">
      <div className="title-wrapper">
        <span className="title">crudLord</span>
        <TodoList
          handleSetTodos={handleSetTodos}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
