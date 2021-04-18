import React from 'react';
import "./C3.css";

function C3() {
    return (
        <div className="body__containerThree" >
            <div className="body__banner" >
                <img className="body__bannerImage" src="https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/images/2020/07/ea-hero-medium-ea-play-7x2-xl.jpg.adapt.crop2x1.1023w.jpg" alt="..." />
                <div className="body__bannerTagline" >
                    <img src= "https://media.contentapi.ea.com/content/dam/eacom/subscription/ea-play/common/hero-logos/color/ea-play-logo-coral-hero-logo-small.svg" alt="..."/>
                    <p>DON’T JUST GET THE GAME. GET MORE FROM YOUR GAME. UNLOCK EXCLUSIVE REWARDS, MEMBERS-ONLY CONTENT, AND A LIBRARY OF TOP TITLES.</p>
                    <div>
                        <a href="/" >JOIN NOW</a>
                    </div>
                </div>
                <div className="body__bannerBottom" >
                    <h4>PARENTS: VIDEO GAME CONTROL IS IN YOUR HANDS.</h4>
                    <div>
                        <a href="/" >LEARN MORE</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default C3;
