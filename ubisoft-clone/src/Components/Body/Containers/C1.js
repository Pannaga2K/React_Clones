import React, { useEffect, useState } from 'react';
import "./C1.css";
import {db} from "../../../firebase";
import XBOX_ONE from "../../../Logos/XBOX_ONE.png";
import PS4 from "../../../Logos/PS4.png";
import WINDOWS from "../../../Logos/WINDOWS.png";
import NINTENDO_SWITCH from "../../../Logos/NINTENDO_SWITCH.png";
import STADIA from "../../../Logos/STADIA.png";
import VR_LOGO from "../../../Logos/VR_LOGO.png";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';

// NAVIGATION
SwiperCore.use([Navigation]);

var i = 0;
function C1() {
    // SWIPER
    const swiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        loop: true,
        slidesPerView: 6,
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    // CONTAINER ONE
    const [gameCard, setGameCard] = useState([]);
    const [currentGameCards, setCurrentGameCards] = useState([]);
    const iconArray = [WINDOWS, PS4, XBOX_ONE, STADIA, NINTENDO_SWITCH, VR_LOGO];
    useEffect(() => {
        db.collection("gameCard").onSnapshot((snapshot) => {
            setGameCard(snapshot.docs.map(doc => doc.data()));
        });
    }, []);

    return (
        <div className="body__container body__containerOne">
            <h1>EXPLORE MORE GAMES</h1>
            <div className="gamesCard swiper-container">
                <div className="swiper-wrapper">
                    {gameCard.map((gC) => (
                        <div className="gameCard__info swiper-slide">
                            <img src={gC.image} alt="..." />
                            <div className="gameCard__tagline">
                                <h3>{gC.name}</h3>
                                <h6>{gC.releaseDate}</h6>
                                <div className="gameCard__logo">
                                    {gC.platforms.map((p) => (
                                        <img src={iconArray[p-1]} alt=""/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-button-prev"></div>
                <button className="navigation__gameCard">VIEW MORE GAMES</button>
                <div className="swiper-button-next"></div>
                {/* <div className="navigation__gameCard">
                    <span className="gameCard__navigation swiper-button-prev" id="prev2" ><ChevronLeftIcon/></span>
                    <button>VIEW MORE GAMES</button>
                    <span className="gameCard__navigation swiper-button-next" id="next2" ><ChevronRightIcon/></span>
                </div> */}
            </div>
            
        </div>
    )
}

export default C1;
