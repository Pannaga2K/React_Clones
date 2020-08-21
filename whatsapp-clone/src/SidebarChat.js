import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';
import db from "./firebase";

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id){
            db.collection("rooms").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("ENTER THE CHAT ROOM");
        if(roomName){
            //DB
            db.collection("rooms").add({
                name: roomName
            });
        }
    }

    return !addNewChat ?  (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h4>{name}</h4>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>ADD NEW CHAT</h2>
        </div>
    )
}

export default SidebarChat
