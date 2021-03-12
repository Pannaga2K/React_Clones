import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import NoteIcon from '@material-ui/icons/Note';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();

    return (
        <div className="sidebar" >
            <Button startIcon={<AddIcon/>} className="sidebar__compose" onClick={() => dispatch(openSendMessage())} >COMPOSE</Button>
            <SidebarOption Icon={InboxIcon} title="INDEX" number={23} selected={true} />
            <SidebarOption Icon={StarIcon} title="STARRED" number={23} />
            <SidebarOption Icon={AccessTimeIcon} title="SNOOZED" number={23} />
            <SidebarOption Icon={LabelImportantIcon} title="IMPORTANT" number={23} />
            <SidebarOption Icon={NearMeIcon} title="SENT" number={23} />
            <SidebarOption Icon={NoteIcon} title="DRAFTS" number={23} />
            <SidebarOption Icon={ExpandMoreIcon} title="MORE" number={23} />
            <div className="sidebarOption__footer" >
                <div className="sidebarOption__footerIcons" >
                    <IconButton><PersonIcon/></IconButton>
                    <IconButton><DuoIcon/></IconButton>
                    <IconButton><PhoneIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
