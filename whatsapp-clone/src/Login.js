import React from 'react'
import "./Login.css";
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useDataLayerValue } from './StateProvider';
import {actionTypes} from "./reducer";

function Login() {
    const [{}, dispatch] = useDataLayerValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => {
            alert(error.message);
        });
    };

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG16.png" alt="" />
                <div className="login__text">
                    <h1>SIGN IN TO WHATSAPP</h1>
                </div>
                <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
