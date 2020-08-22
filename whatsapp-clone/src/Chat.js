import React , {useState, useEffect} from 'react'
import "./Chat.css";
import { Avatar , IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom';
import db from './firebase';
import { useDataLayerValue } from './StateProvider';
import firebase from "firebase";

function Chat() {
    const [seed, setSeed] = useState("");
    const [input, setInput] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useDataLayerValue();


    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => (
                setRoomName(snapshot.data().name)
            ));
            // console.log(roomName);
            db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
            console.log(!messages);

        }
    }, [roomId]);

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000));
    }, [roomId]);                                         //FUNCTION IS CALLED WHENEVER THE ROOMID IS CHANGED

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        db.collection("rooms").doc(roomId).collection("messages").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("");           //EMPTY AFTER EACH SENT MESSAGE
    }

    // console.log(input);
    var x = (messages[0]==undefined) ? (<p>YET TO START CONVERSATION</p>) : (<p>LAST SEEN {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p> );

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h1>{roomName}</h1>
                    {x}                   
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__reciever"}`}><span className="chat__name">{message.name}</span>{message.message}<span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span></p>
                ))}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="TYPE A MESSAGE" />
                    <button onClick={sendMessage} type="submit">SEND</button>
                </form>
                <MicIcon/>   
            </div>
        </div>
    )
}

export default Chat
