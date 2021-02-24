import React, { useState, useEffect, useRef, useCallback } from 'react';
import './App.css';

function createInitialPlanets() {
  return ["earth", "moon"]
}

const URL = "https://swapi.dev/api/planets/";

function App() {
  const [ planets, setPlanets ] = React.useState(createInitialPlanets())
  const [ count, setCount ] = useState(1)
  const [ isMounted, setIsMounted ] = useState(false);
  const footerRef = useRef();
  const handleClickRef = useRef();

  const handleClick = useCallback(() => {
    console.log('!!! inside handleClick')
    fetch(URL+String(count))
      .then(res => res.json())
      .then(res => {
        setPlanets([...planets, res.name])
        setCount(count+1)
      })
      .catch(e => console.log(e))
  },[planets, count]);

  // keep callBackRef up to date
  useEffect(() => {
    // updating some current ...
    handleClickRef.current = handleClick;
  }, [handleClick])

  useEffect(() => {
    const myObserver = new IntersectionObserver(() => handleClickRef.current(), {threshold: .1})
    myObserver.observe(footerRef.current)

  }, [])


  return (
    <div className="App">
      <button onClick={handleClick}>GET MORE PLANETS</button>
      <h1>swapi grab</h1>
      <ul>
        {
          planets.map(planet => {
            return (
              isLoading ? <span>???</span>: <li
                key={planet}
                style={{
                  "height": "50px",
                  "border": "30px solid red"
                }}>{planet}</li>)
          })
        }
      </ul>
      <div
        ref={footerRef}
        style={{
          "height": "50px",
          "backgroundColor": "blue"
        }}>placeholder for breaking</div>
    </div>
  );
}

export default App;


/*

function potatoSlicer(str) {

}
 */
