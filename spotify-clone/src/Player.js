import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body"
import Footer from "./Footer";

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                {/* SIDEBAR */}
                <Sidebar/>
                {/* BODY */}
                <Body spotify={spotify} />
            </div>
            {/* FOOTER */}
            <Footer/>
        </div>
    )
}

export default Player
