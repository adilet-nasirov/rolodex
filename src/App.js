import './App.css';
import {React, useEffect, useState} from 'react'
function App() {
  const [monsters, setMonsters]= useState([]);
  useEffect(()=>{
    const data= fetch('https://jsonplaceholder.typicode.com/users').then(responce=> responce.json()).then(d=>{
      setMonsters(d)
    })
  },[])
  return (
    <div className="App">
      {
        monsters.map(monster=>{
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
    </div>
  );
}

export default App;
