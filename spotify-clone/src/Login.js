import React from 'react'
import "./Login.css";
import {loginUrl} from "./spotify";

function Login() {
    return (
        <div className="login">
            {/* SPOTIFY LOGO */}
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            {/* LOGIN BUTTON */}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
