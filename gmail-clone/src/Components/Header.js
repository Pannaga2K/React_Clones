import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import GMAIL from "../Logos/GMAIL.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    }

    return (
        <div className="header" >
            <div className="header__left" >
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src={GMAIL} alt="..." />
            </div>
            <div className="header__middle" >
                <SearchIcon/>
                <input type="text" placeholder="SEARCH" />
                <ExpandMoreIcon/>
            </div>
            <div className="header__right" >
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <Avatar onClick={signOut} src={user?.photoURL} />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
