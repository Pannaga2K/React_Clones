import React from 'react';
import "./Login.css";
import GMAIL from "../../Logos/GMAIL.png";
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({user}) => {
            // console.log(user);
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }));
        }).catch((err) => {
            alert(err.message);
        });
    }

    return (
        <div className="login">
            <div className="login__container" >
                <img src={GMAIL} alt="..." />
                <Button onClick={signIn} >LOGIN</Button>
            </div>
        </div>
    )
}

export default Login;
