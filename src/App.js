import React, { useState } from 'react';
import './App.css';

function createInitialPlanets() {
  return ["earth", "moon"]
}

const URL = "https://swapi.dev/api/planets/1";

function App() {
  const [ planets, setPlanets ] = React.useState(createInitialPlanets())

  function handleClick() {
    fetch(URL)
      .then(res => res.json())
      .then(res => {
        setPlanets([...planets, res.name])
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="App">
      <button onClick={handleClick}>GET MORE PLANETS</button>
      <h1>swapi grab</h1>
      <ul>
        {
          planets.map(planet => {
            return (
              <li>{planet}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
