import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './Home.css'
import League from '../League/League';
const Home = (props) => {
    const leagues = props.leagues;
    console.log(leagues)
    return (
        <div>
            <div className="banner">
                <div className="overlay">
                    <h2 className="text-white">Sports Mania</h2>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    {
                        leagues.map(league => <League league={league} key={league.idLeague}></League>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;