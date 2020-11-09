import React, { useEffect, useState } from 'react';
import "./C5.css";
import {db} from "../../../firebase";
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import CloseIcon from '@material-ui/icons/Close';
import ReactPlayer from 'react-player';

function C5() {
    const [videos, setVideos] = useState([]);
    const [isVideoClicked, setIsVideoClicked] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);

    useEffect(() => {
        db.collection("featuredVideos").onSnapshot((snapshot) => {
            setVideos(snapshot.docs.map((doc) => ({
                url: doc.data().url,
                image: doc.data().image,
                title: doc.data().title
            })));
        });
    }, []);

    console.log(videos);

    const clickedVideo = (index) => {
        setClickedIndex(index);
        setIsVideoClicked(!isVideoClicked);
    }

    const closeVideoPlayer = () => {
        setIsVideoClicked(!isVideoClicked);
        console.log(isVideoClicked);
    }

    return (
        <div className="body__containerFive">
            <h1>FEATURED VIDEOS</h1>
            <div className="container__videos">
                {videos?.map((v, index) => (
                    <div className="container__videosThumbnail" onClick={() => clickedVideo(index)}>
                        {isVideoClicked && clickedIndex===index ? (
                            <>
                                <ReactPlayer className="container__videoPlayer" url={v.url} />
                                <CloseIcon className="container__closeIcon" fontSize="large" onClick={() => closeVideoPlayer()} />
                            </>
                        ) : (
                            <>
                                <img src={v.image} alt="..." />
                                <PlayCircleFilled className="container__icon" fontSize="large" />
                                <div className="container__videosTitle">
                                    <p>{v.title}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <button>VIEW ALL TRAILERS</button>
        </div>
    )
}

export default C5;
