import React from 'react';

const League = (props) => {
    const leagueInfo = props.league;
    console.log(leagueInfo)
    return (
        <div className="col-md-3 mb-3 mr-3">
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
};

export default League;