import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import LeagueInfo from './components/LeagueInfo/LeagueInfo';
import NotFound from './components/NotFound/NotFound';

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home leagues={leagues}></Home>
          </Route>
          <Route path="/leagueinfo/:id">
            <LeagueInfo></LeagueInfo>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
