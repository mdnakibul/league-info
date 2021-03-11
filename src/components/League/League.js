import React from 'react';
import './League.css'
import { useHistory } from "react-router-dom";
const League = (props) => {
    let {idLeague,strLeague,strLeagueAlternate,strSport} = props.league;
    let alternativeName = strLeagueAlternate;
    if(strLeagueAlternate === ""){
        alternativeName = strLeague;
    }
    let history = useHistory()
    const infoRoute = (id) =>{
        history.push("/leagueinfo/" + id);
    }
    console.log(props)
    return (
        <div className="col-md-3 mb-3 mr-3">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <div className="card-banner">
                        <h3 className="text-white px-1 text-center">{alternativeName}</h3>
                    </div>
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">
                        League Id : {idLeague} <br/>
                        League Type : {strSport}
                    </p>
                    <button onClick={() => infoRoute(idLeague)}>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default League;