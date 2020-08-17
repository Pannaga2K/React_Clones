import React from 'react'
import "./VideoFooter.css";
import {Button, Avatar} from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoFooter({channel, song, likes, shares, avatarSrc}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <Avatar src={avatarSrc} />
                <h3>{channel} <Button>FOLLOW</Button></h3>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" fontSize="small" />
                <Ticker mode="smooth" >
                    {({index}) => (
                        <>
                            <h1>{song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter__actions">
                    <div className="videoFooter__stat">
                        <FavoriteIcon />           
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter__stat">
                        <ModeCommentIcon />
                        <p>{shares}</p>
                    </div>
                    <SendIcon />
                    <MoreHorizIcon />
            </div>
        </div>
    )
}

export default VideoFooter
