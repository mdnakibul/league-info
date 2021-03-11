import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueInfo.css'
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png'
const LeagueInfo = () => {
    const {id} = useParams();
    console.log(id);
    const [info,setInfo] = useState([]);
    useEffect(()=>{
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setInfo(data.leagues[0]))
    },[id])

    const {dateFirstEvent,strBanner,strCountry,strGender,strLeague,strLogo,strSport} = info;
    console.log(info);
    const bannerStyle = {
        backgroundImage : `url(${strBanner})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center',
    }

    let playersImg;
    if(strGender === 'male'){
        playersImg = maleImg;
    }else{
        playersImg = femaleImg;
    }
    return (
        <section>
            <div className="detail-banner" style={bannerStyle}>
                <img src={strLogo} alt=""/>
            </div>
            <div className="container mt-2 league-details-container p-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="league-details-left">
                                <h2>{strLeague}</h2>
                                <ul className="details-list">
                                    <li> Founded : {dateFirstEvent}</li>
                                    <li>Country : {strCountry}</li>
                                    <li>Sports Type : {strSport}</li>
                                    <li>Gender : {strGender}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="league-details-right">
                                <img src={playersImg} alt="Players" className="img-fluid "/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default LeagueInfo;