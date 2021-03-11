import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueInfo.css'
import maleImg from '../../images/male.png';
import femaleImg from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag,faMapMarkerAlt,faFutbol,faTransgender,faGlobe } from '@fortawesome/free-solid-svg-icons';
import {faTwitter,faYoutube} from '@fortawesome/free-brands-svg-icons'
const LeagueInfo = () => {
    const { id } = useParams();
    console.log(id);
    const [info, setInfo] = useState([]);
    useEffect(() => {
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setInfo(data.leagues[0]))
    }, [id])

    const { dateFirstEvent, strBanner, strCountry, strGender, strLeague, strLogo, strSport,strTwitter,strYoutube,strWebsite } = info;
    console.log(info);
    const bannerStyle = {
        backgroundImage: `url(${strBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    let playersImg;
    if (strGender === 'Male') {
        playersImg = maleImg;
    } else {
        playersImg = femaleImg;
    }
    return (
        <section className="bg-info">
            <div className="detail-banner" style={bannerStyle}>
                <div className="banner-overlay">
                    <img src={strLogo} alt="" />
                </div>
            </div>
            <div className="container mt-2 league-details-container p-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="league-details-left">
                            <h2>{strLeague}</h2>
                            <ul className="details-list">
                                <li> <FontAwesomeIcon icon={faMapMarkerAlt}/> Founded : {dateFirstEvent}</li>
                                <li> <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</li>
                                <li><FontAwesomeIcon icon={faFutbol}/>Sports Type : {strSport}</li>
                                <li> <FontAwesomeIcon icon={faTransgender}/> Gender : {strGender}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="league-details-right">
                            <img src={playersImg} alt="Players" className="img-fluid " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">
                        <p className="league-description">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </p>
                        <p className="league-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
                            layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                            using 'Content here, content here', making it look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                            many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                            sometimes on purpose (injected humour and the like).
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center">
                        <ul className="social">
                            <li>
                                <a href={strWebsite} style={{color:'#fff'}}>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </a>
                            </li>
                            <li>
                                <a href={strTwitter}>
                                    <FontAwesomeIcon icon={faTwitter}/>
                                </a>
                            </li>
                            <li>
                                <a href={strYoutube} style={{color:'red'}}>
                                    <FontAwesomeIcon icon={faYoutube}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeagueInfo;