import React from 'react';
import "./Body.css";
import C1 from "./Containers/C1";
import C2 from "./Containers/C2";
import C3 from './Containers/C3';

function Body() {
    return (
        <div className="body" >
            <div className="body__home" >
                <img src="https://media.contentapi.ea.com/content/dam/eacom/common/nhl21-hero-210408-nhl21-entering-play-list-xl.jpg.adapt.1024w.jpg" alt="..." />
                <div className="body__homeTagline" >
                    <img src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/images/2021/04/nhl21-adaptive-logo-eap-nhl21-7x2-xl-5x2-lg-2x1-md-16x9-sm-xs.png.adapt.crop16x9.767w.png" alt="..." />
                    <p>HIT THE ICE WITH EA PLAY*</p>
                    <p>CARVE YOUR PATH TO SUPERSTARDOM AND GO DOWN AS ONE OF THE LEAGUE’S GREATEST.</p>
                    <div>
                        <a href="/" >LEARN MORE</a>
                    </div>
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
        </div>
    )
}

export default Body;
