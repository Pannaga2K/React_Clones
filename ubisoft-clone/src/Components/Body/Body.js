import React, { useEffect, useState } from 'react';
import "./Body.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {db} from "../../firebase";

import C1 from "./Containers/C1";
import C2 from "./Containers/C2";
import C3 from "./Containers/C3";
import C4 from "./Containers/C4";
import C5 from "./Containers/C5";
import C6 from "./Containers/C6";

var i = 0;
var x;
var liBackward = [], liForward = [];

function Body({games}) {
    // GAME SLIDES
    const [currentGame, setCurrentGame] = useState([]);
    const [tagline, setTagline] = useState([]);

    var id = games[i]?.id;
    console.log(id);
    useEffect(() => {
        if(games[i]?.id){
            console.log(id);
            db.collection("games").doc(id).collection("tagline").onSnapshot((snapshot) => {
                console.log(snapshot);
                setTagline(snapshot.docs.map((doc) => ({
                    main: doc.data().main,
                    sub: doc.data().sub
                })))
            });
        }
    }, [id]);

    // SLIDES NAVIGATOR
    const prev = () => {
        if(i <= 0)
            i = games.length;
        i--;
        liForward = [];
        liBackward = [];

        return setCurrentGame(games[i]);
    }

    const next = () => {
        if(i === games.length - 1) {
            i = -1;
        }
        i++;
        liForward = [];
        liBackward = [];
        return setCurrentGame(games[i]);
    }

    // CURRENT GAME
    x = !currentGame.image ? (games[i]?.data) : (currentGame);

    // SELECT GAME
    const selectGame = (li) => {
        console.log(li);
        games.map((g, index) => {
            if(li === g.data.name){
                x = g.data;
                liForward = [];
                liBackward = [];
                i = index;
                return setCurrentGame(g.data);
            }
        });
    }

    // RENDERING NAMES + LOGO'S
    var c = 0;
    useEffect(() => {
        for(let j=i-1;c<2;j--) {
            if(j<0) {
                j = games?.length - 1;
            }
            console.log(j);
            if(!!games[j]) {
                liForward.unshift(games[j]?.data.name);
            }
            c++;
        }
    }, [games, i]);
    useEffect(() => {
        for(let k=i+1;c<4;k++) {
            if(k>games?.length - 1) {
                k = 0;
            }
            console.log(k);
            if(!!games[k]) {
                liBackward.push(games[k]?.data.name);
            }
            c++;
        }
    }, [games, i]);

    console.log(liForward);
    console.log(liBackward);

   

    return (
        <div className="body">
            <div className="body__banner ">
                <h1>REPLAY & RELIVE UBISOFT FORWARD</h1>
                <button>LEARN MORE</button>
            </div>
            <div className="body__container" >
                <div className="gameIntro">
                    <img className="body__image" src={x?.image} alt="" />
                    <div className="gameIntro__tagline">
                        <p><strong>{tagline[0]?.main}</strong></p>
                        <p>{tagline[0]?.sub}</p>
                        <div className="gameIntro__buttons">
                            {(x?.watchTrailer && x?.visitSite) ? <><button>WATCH TRAILER</button><button>VISIT SITE</button></> : ((x?.watchTrailer) ? (<button>WATCH TRAILER</button>) : (<button>VISIT SITE</button>))}
                        </div>
                    </div>
                </div>
                <div className="gameIntro__toggle">
                    <div className="gameIntro__nameForward">
                        <ul>
                            {liForward?.map((li) => <li onClick={() => selectGame(li)}><h2>{li}</h2></li>)}
                        </ul>
                    </div>
                    <img src={x?.logo} alt="..." />
                    <div className="gameIntro__nameBackward">
                        <ul>
                            {liBackward?.map((li) => <li onClick={() => selectGame(li)}><h2>{li}</h2></li>)}
                        </ul>
                    </div>
                    <span className="body__navigation" id="prev" onClick={() => prev()}><ChevronLeftIcon/></span>
                    <span className="body__navigation" id="next" onClick={() => next()}><ChevronRightIcon/></span>
                </div>
            </div>
            <div className="body__container" >
                <C1/>
            </div>
            <div className="body__container" >
                <C2/>
            </div>
            <div className="body__container" >
                <C3/>
            </div>
            <div className="body__container" >
                <C4/>
            </div>
            <div className="body__container" >
                <C5/>
            </div>
            <div className="body__container" >
                <C6/>
            </div>
        </div>
    )
}

export default Body;
