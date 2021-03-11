import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';

function App() {
  const [leagues,setLeagues] = useState([])
  useEffect(()=>{
    const url = 'https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const newLeagues = data.leagues.slice(0,15);
      setLeagues(newLeagues)
    });
  },[])
  return (
    <div>
      <Home leagues={leagues}></Home>
    </div>
  );
}

export default App;
