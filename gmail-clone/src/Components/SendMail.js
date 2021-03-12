import React from 'react';
import "./SendMail.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import {db} from "../firebase";
import firebase from "firebase";

function SendMail() {
    const dispatch = useDispatch();
    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        db.collection("mails").add({
            to: data.to,
            subject: data.subject,
            message: data.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail" >
            <div className="sendMail__header" >
                <h3>NEW</h3>
                <CloseIcon className="sendMail__close" onClick={() => dispatch(closeSendMessage())} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" name="to" placeholder="TO" ref={register({required: true})} />
                {errors.to && <p className="sendMail__error" >REQUIRED!</p>}
                <input type="text" name="subject" placeholder="SUBJECT" ref={register({required: true})} />
                {errors.subject && <p className="sendMail__error" >REQUIRED!</p>}
                <input className="sendMail__message" type="text" name="message" ref={register({required: true})} />
                {errors.text && <p className="sendMail__error" >REQUIRED!</p>}
                <div className="sendMail__options" >
                    <Button className="sendMail__send" variant="contained" color="primary" type="submit" >SEND</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
