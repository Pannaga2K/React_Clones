import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer/StateProvider';
import {auth} from "../firebase";

function Header() {
    const [{basket, user}, dispatch] = useDataLayerValue();

    const handleAuth = () => {
        if(user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne" >HELLO {user ? user.email : "GUEST"}</span>
                        <span className="header__optionLineTwo" >{user ? "SIGN OUT" : "SIGN IN"}</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne" >RETURN &</span>
                    <span className="header__optionLineTwo" >ORDERS</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne" >YOUR</span>
                    <span className="header__optionLineTwo" >PRIME</span>
                </div>
                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon className="header__optionBasketIcon" />
                        <p className="header__optionBasketCount">{basket?.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
