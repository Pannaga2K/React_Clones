import React, { useState } from 'react';
import "./Login.css";
import { Link, useHistory } from 'react-router-dom';
import {auth} from "../firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((auth) => {
            history.push("/");
        }).catch(err => alert(err.message));
    }
    
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if(auth) {
                history.push("/");
            }
        }).catch((err) => {
            alert(err.message);
        })
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="login__container">
                <h1>SIGN IN</h1>
                <form className="login__containerForm">
                    <h5>EMAIL</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>PASSWORD</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signin} type="submit" className="login__signinButton">SIGN IN</button>
                </form>
                <p>By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__registerButton">CREATE YOUR ACCOUNT</button>
            </div>
        </div>
    )
}

export default Login;
