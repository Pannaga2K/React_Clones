import React, { useState, useEffect } from 'react'
import "./Sidebar.css";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { useDataLayerValue } from './StateProvider';

function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useDataLayerValue();

    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => (
            setRooms(snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
            })))
        ));
        // return () => {
        //     unsubscribe();         //FLUSHES/CLEANS IT, IF THE COMPONENT UNMOUNTS
        // }
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>          {/* OPTIONAL CHAINING ---> IF USER IS UNDEFINED [EXCEPTION] */}
                <div className="sidebar__headerRight">
                    <IconButton> 
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>

            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input type="text" placeholder="SEARCH" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat={true} />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
