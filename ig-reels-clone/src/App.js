import React, {useState, useEffect} from 'react';
import './App.css';
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot(snapshot => {     //GET THE MOST UPDATED COLLECTION [REALTIME]
      setReels(snapshot.docs.map(doc => doc.data()))      //.DOCS ---> RETURNS AN ARRAY
    });
  }, []); //COMPONENT RUNS WHEN IT LOADS AND NEVER RUNS AGAIN ---> EMPTY ARRAY
          //COMPONENT RUNS WHEN IT LOADS AND IT CHECKS THE DEPENDENCIES IF IT IS CHANGED OR NOT , IF IT IS CHANGED ---> RUNS AGAIN WHEN CHANGED, ELSE DO NOT RUN ---> [NAME, AGE]
  console.log(reels);
  return (
    <div className="app">
      <div className="app__top">
        {/* IMAGE */}
        <img className="app__logo" src="https://www.transparentpng.com/thumb/instagram-logo-icon/BUmtDt-instagram-logo-icon-image-download.png" alt="" />
        {/* TITLE */}
        <h1>REELS</h1>
      </div>
      <div className="app__videos">
        {/* CONTAINER FOR VIDEOS */}
        {reels.map(({url, likes, shares, channel, song, avatarSrc}) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}

      </div>

      
      
    </div>
  );
}

export default App;
