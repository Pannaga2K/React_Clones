import React ,{useState, useRef} from 'react'
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({url, likes, shares, channel, song, avatarSrc}) {
    // useState
    const [isVideoPlayin, setIsVideoPlayin] = useState(false);
    // useRef
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlayin) {
            // STOP/PAUSE THE VIDEO 
            videoRef.current.pause();
            setIsVideoPlayin(false);
        } else {
            // PLAY THE VIDEO
            videoRef.current.play();
            setIsVideoPlayin(true);
        }
    }
    return (
        <div className="videoCard">
            <VideoHeader />
            <video ref={videoRef} onClick={onVideoPress} className="videoCard__player" src={url} alt="IGRV" loop />
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard
