import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__image" src="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1APEidabmxlKSCJOHQlQxY/596d141c29287cef4fab07079fda613a/ubisoft-logo-mobile.svg" alt="" />
                <h4>UBISOFT</h4>
            </div>
            <div className="header__items ">
                <h4>UPLAY+</h4>
                <h4>STORE</h4>
                <h4>MORE GAMES</h4>
                <h4>NEWS</h4>
                <h4>FORUMS</h4>
                <h4>SUPPORT</h4>
            </div>
            <div className="header__search">
                <SearchIcon className="header__searchIcon"/>
                <input type="text" name="search" />
            </div>
            <div className="header__login">
                <h4>LOGIN</h4>
            </div>
        </div>
    )
}

export default Header;
