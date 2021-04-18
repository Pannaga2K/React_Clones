import React from 'react';
import "./C2.css";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import {db} from "../../firebase";
import { useEffect } from 'react';
import { useState } from 'react';

// NAVIGATION
SwiperCore.use([Navigation]);

function C2() {
    const [currentNewsCard, setCurrentNewsCard] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const latestUpdatesTitle = ["EA NEWS", "EA PLAY", "MADDEN NFL", "APEX LEGENDS", "FIFA", "STAR WARS", "THE SIMS 4", "UFC", "INSIDE EA"];

    useEffect(() => {
        db.collection("newsCards").doc(latestUpdatesTitle[selectedIndex]).collection("news").onSnapshot((snapshot) => {
            setCurrentNewsCard(snapshot.docs.map((doc) => ({
                image: doc.data().image,
                title: doc.data().title,
                date: doc.data().date,
                main: doc.data().main,
                sub: doc.data().sub
            })));
        });
    }, [selectedIndex]);

    console.log(currentNewsCard);

    // SWIPER
    const swiper = new Swiper('.swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 7,
    });

    // SELECTED INDEX OF NEWS LIST
    const selectCurrentNews = (index) => {
        setSelectedIndex(index);
    }

    return (
        <div className="body__containerTwo" >
            <h1>LATEST UPDATES</h1>
            <div className="swiper-container card__lists" >
                <div className="swiper-wrapper" >
                     {latestUpdatesTitle.map((lUT, index) => (
                        <div className="swiper-slide latestUpdatesTitle" >
                            <button id={index === selectedIndex ? ("selected__button") : ("")} className={latestUpdatesTitle.length-1 === index ? ("rearEnd__button") : ("")} onClick={() => selectCurrentNews(index)}>{lUT}</button>
                        </div>
                     ))}
                </div>
            </div>
            <div className="cards" >
                {currentNewsCard?.map((cNC) => (
                    <div className="card" >
                        <img src={cNC.image} alt="..." />
                        <div className="card__inner" >
                            <div className="card__header" >
                                <p>{cNC.title}</p>
                                <p>{cNC.date}</p>
                            </div>
                            <div className="card__info" >
                                <h3>{cNC.main}</h3>
                                <p>{cNC.sub}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="body__containerTwoLink" >
                <div>
                    <a href="/" >READ MORE</a>
                </div>
            </div>
        </div>
    )
}

export default C2;