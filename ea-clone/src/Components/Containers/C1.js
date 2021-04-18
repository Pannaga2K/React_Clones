import React, { useEffect, useState } from 'react';
import "./C1.css";
import {db} from "../../firebase";

function C1() {
    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        db.collection("featuredGames").onSnapshot((snapshot) => {
            console.log(snapshot);
            setGamesList(snapshot.docs.map((doc) => ({
                image: doc.data().image,
                logo: doc.data().logo
            })))
        })
    }, []);

    console.log(gamesList);

    return (
        <div className="body__containerOne" >
            <h1>FEATURED GAMES</h1>
            <div className="games__list" >
                {gamesList.map((gL) => (
                    <div className="games__preview" >
                        <img className="game__image" src={gL.image} alt="..." />
                        <div className="game__hover" >
                            <div className="gradient" ></div>
                            <img className="game__image2" src={gL.logo} alt="..." />
                            <p>OFFICIAL SITE</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="body__containerOneLink" >
                <div>
                    <a href="/" >LATEST GAMES</a>
                </div>
            </div>
        </div>
    )
}

export default C1;
