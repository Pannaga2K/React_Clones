import React, { useEffect, useState } from 'react';
import "./Header.css";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EA from "../Logos/EA.png";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import {db} from "../firebase";

function Header() {
    const [gamesList, setGamesList] = useState([]);
    const [mainGame, setMainGame] = useState([]);

    useEffect(() => {
        db.collection("featuredGames").onSnapshot((snapshot) => {
            console.log(snapshot);
            setGamesList(snapshot.docs.map((doc) => ({
                image: doc.data().image,
                logo: doc.data().logo,
                name: doc.data().name
            })));
            snapshot.docs.map((doc) => {
                if(doc.data().name === "STAR WARS SQAUDRONS")
                    setMainGame({
                        image: doc.data().image,
                        logo: doc.data().logo,
                        name: doc.data().name
                    })
                })
        });

    }, []);

    // ELEMENTS
    const body = document.getElementsByTagName('div')[0];
    

    // SIDEBAR SWITCH
    const openSidebar = () => {
        document.getElementById("mySidebar").style.marginLeft = "0";
        document.getElementById("mySidebar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
        body.style.overflow = "hidden";
    }
    
    const closeSidebar = () => {
        document.getElementById("mySidebar").style.marginLeft = "-400px";
        document.getElementById("mySidebar").style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
        body.style.overflow = "visible";
    }

    // STICKY HEADER ON SCROLL
    window.addEventListener("scroll", (e) => {        
        const stickyHeader = document.querySelector("#stickyHeader");
        const headerLogo = document.querySelector("#headerLogo");
        stickyHeader.classList.toggle("sticky", window.scrollY > 0);
        headerLogo.classList.toggle("headerLogo", window.scrollY > 0);
    });

    return (
        <div  className="header"  >
            <div id="stickyHeader" className="header__top" >
                <div id="headerLogo" className="header__top__logo" >
                    <PersonOutlineIcon className="header__top__logoOne" />
                    <div className="header__top__logoTwo" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 17"><path d="M5.193,0C0.538,0,0,2.673,0,4.684a0.978,0.978,0,0,0,1.955,0c0-1.648.225-2.729,3.238-2.729,2.852,0,2.852,1.45,2.852,2.729a1.951,1.951,0,0,1-1.29,1.675l-0.216.083C4.8,7.108,3.809,7.531,3.809,8.472v3.5a0.978,0.978,0,1,0,1.955,0V8.887c0.4-.209,1.152-0.5,1.474-0.62l0.224-.085A3.831,3.831,0,0,0,10,4.684C10,3.526,10,0,5.193,0Z"></path><path d="M5.366,14.943H3.982a1.029,1.029,0,0,0,0,2.057H5.366A1.029,1.029,0,1,0,5.366,14.943Z"></path></svg>
                    </div>
                    <img className="header__top__logoThree" src={EA} alt="..." />
                </div>
            </div>
            <div className="header__bottom" >
                <MoreVertIcon className="header__bottomIcon" onClick={openSidebar} />
                <div id="mySidebar" className="sidebar">
                    <div className="sidebar__top" >
                        <h3>ALL GAMES</h3>
                        <CloseIcon className="closeIcon" onClick={closeSidebar} />
                    </div>
                    <div className="sidebar__components" >
                        <div className="sidebar__mainGameGrid" >
                            <img className="sidebar__mainGameGridImage" src={mainGame.image} alt="..." />
                            <div className="sidebar__mainGameGridHover" >
                                <div className="sidebar__gradient" ></div>
                                <img className="sidebar__mainGameGridImage2" src={mainGame.logo} alt="..." />
                            </div>
                        </div>
                        {gamesList?.map((gL) => (
                            <div className="sidebar__subGame" >
                                {gL.name === "STAR WARS SQAUDRONS" ? (
                                    <></>
                                ) : (
                                    <div className="sidebar__subGameGrids" >
                                        <img className="sidebar__subGameGridImage" src={gL.image} alt="..." />
                                        <img className="sidebar__subGameGridImage2" src={gL.logo} alt="..." />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <img className="header__bottom__logo" src="https://media.contentapi.ea.com/content/dam/eacom/common/ea-wordmark-network-nav-coral.svg" alt="..." />
                <div className="header__bottom__items" >
                    <div className="header__bottom__itemsOptions dropdown" >
                        <p>Games</p>
                        <ExpandMoreIcon className="header__bottom__itemsIcon" />
                        <div className="header__bottom__itemsDropdown" >
                            <div className="header__bottom__flex">
                                <div className="header__bottom__item" >
                                    <h3>BROWSE GAMES</h3>
                                    <hr/>
                                    <a href="/" >FEATURED GAMES</a>
                                    <a href="/" >ALL GAMES</a>
                                    <a href="/" >COMING SOON</a>
                                    <a href="/" >FREE-TO-PLAY</a>
                                    <a href="/" >SUBSCRIBE</a>
                                </div>
                                <div className="header__bottom__item">
                                    <h3>PLATFORMS</h3>
                                    <hr/>
                                    <a href="/" >PC</a>
                                    <a href="/" >PS4</a>
                                    <a href="/" >XBOX ONE</a>
                                    <a href="/" >NINTENDO SWITCH</a>
                                    <a href="/" >MOBILE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom__itemsOptions dropdown" >
                        <p>More Experiences</p>
                        <ExpandMoreIcon className="header__bottom__itemsIcon" />
                        <div className="header__bottom__itemsDropdown" >
                            <div className="header__bottom__item" >
                                <a href="/" >SUBSCRIBE</a>
                                <a href="/" >ORIGIN</a>
                                <a href="/" >COMPETITVE GAMING</a>
                                <a href="/" >EA PLAY LIVE</a>
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom__itemsOptions dropdown" >
                        <p>About</p>
                        <ExpandMoreIcon className="header__bottom__itemsIcon" />
                        <div className="header__bottom__itemsDropdown" >
                            <div className="header__bottom__item" >
                                <a href="/" >COMPANY</a>
                                <a href="/" >EA STUDIOS</a>
                                <a href="/" >OUR TECHNOLOGY</a>
                                <a href="/" >EA PARTNERS</a>
                                <a href="/" >NEWS</a>
                                <a href="/" >INSIDE EA</a>
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom__itemsOptions dropdown" >
                        <p>Commitments</p>
                        <ExpandMoreIcon className="header__bottom__itemsIcon" />
                        <div className="header__bottom__itemsDropdown" >
                            <div className="header__bottom__item" >
                                <a href="/" >POSITIVE PLAY</a>
                                <a href="/" >INCLUSION AND DIVERSITY</a>
                                <a href="/" >COMMUNITY OUTREACH</a>
                                <a href="/" >PEOPLE AND CULTURE</a>
                                <a href="/" >ENVIRONMENT</a>
                            </div>
                        </div>
                    </div>
                    <div className="header__bottom__itemsOptions dropdown" >
                        <p>Resources</p>
                        <ExpandMoreIcon className="header__bottom__itemsIcon" />
                        <div className="header__bottom__itemsDropdown" >
                            <div className="header__bottom__item" >
                                <a href="/" >HELP</a>
                                <a href="/" >FORUMS</a>
                                <a href="/" >PARENTAL CONTROLS</a>
                                <a href="/" >ACCESSIBILITY</a>
                                <a href="/" >CAREERS</a>
                                <a href="/" >PRESS</a>
                                <a href="/" >INVESTORS</a>
                                <a href="/" >PLAYTESTING</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
