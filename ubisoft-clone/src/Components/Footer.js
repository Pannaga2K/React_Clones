import React from 'react';
import "./Footer.css";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import CloseIcon from '@material-ui/icons/Close';

function Footer() {

    const openSidebar = () => {
        document.getElementById("mySidenav").style.width = "250px";
        
    }

    const closeSidebar = () => {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="footer">
            <div className="footer__iconsTab">
                <p>VISIT OTHER UBISOFT CHANNELS</p>
                <div className="footer__icons">
                    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7MSfSWhXCnKkoVagD3E6lJ/a522fb64dd1eec95ee5de804ddf6df64/_Ubisoft__global_twitter_logo.png" alt="..." />
                    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/32xRzuzxNUJYa3QO5iY8B5/7b048bf697702593da82c3325e7dc0d2/_Ubisoft__global_facebook_logo.png" alt="..." />
                    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7qD6KHarSZ9h2uc7G5o20C/10c9770cf91907d417a61ba3f03954aa/_Ubisoft__global_twitch_logo.png" alt="..." />
                    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/68qlJsyTv8sTv54rqqfOPO/d9452f1568d6839022917756165836eb/_Ubisoft__global_youtube_logo.png" alt="..." />
                    <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6htnsL4NtlpGqIG7nehH4y/fbc47c2dcd35743457c26e438d3e2d0f/_Ubisoft__global_instagram_logo.png" alt="..." />
                </div>
            </div>
            <div className="footer__main">
                <div className="footer__top">
                    <div class="footer__mainLinks">
                        <img src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5RMQ9vwghls0An4wzhKtz7/d2f9af89354d87f10980979ef375b4e0/footer_logo.png" alt="..." />
                        <a href="#">PRIVACY</a>
                        <a href="#">LEGAL INFO</a>
                        <a href="#">TERMS</a>
                        <a href="#">LEGAL DOCUMENTS</a>
                        <a href="#">VIDEO POLICY</a>
                        <a href="#">UK TAX STRATEGY</a>
                        <a href="#">MODERN ANTI-SLAVERY ACT</a>
                        <a href="#">CONTACT</a>
                    </div>
                    <div className="footer__mainGrid">
                        <p>UBISOFT CONNECT</p>
                        <p>PLAYTEST</p>
                        <p>UK OFFICE PAGE</p>
                        <p>COMPANY</p>
                        <p>PRESS</p>
                        <p>INVESTORS</p>
                        <p>START-UPS</p>
                        <p>CAREERS</p>
                        <p>LOCATIONS</p>
                    </div>                
                    <div className="container__languageSelector">
                        <img src="https://cdn0.iconfinder.com/data/icons/bold-lines/100/planet-01-512.png" alt="..." />
                        <div className="container__language">
                            <p>ENGLISH</p>
                            <KeyboardArrowDownIcon onClick={() => openSidebar()} />
                        </div>
                        <div id="mySidenav" class="sidenav">
                            <a href="javascript:void(0)" class="closebtn" onClick={() => closeSidebar()}><CloseIcon/></a>
                            <a href="#">ENGLISH UK</a>
                            <a href="#">ENGLISH US</a>
                            <a href="#">ESPANYOL</a>
                            <a href="#">ARABIC</a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>© 2019 Ubisoft Entertainment. All Rights Reserved. Ubisoft, Ubi.com and the Ubisoft logo are trademarks of Ubisoft Entertainment in the U.S. and/or other countries.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
