import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player";
import {useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState();
  const [{user, token, playlists, discover_weekly}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";  
    const _token = hash.access_token;
    console.log(hash);
    if(_token){
      // setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        // console.log(user);
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        });
        console.log(playlists);
      });
      spotify.getPlaylist("55ylGESlhvgrpoF1tFhTM0").then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        });
        console.log(response);
      })
    }
    // console.log("TOKEN: ", token);
  }, []) //RUNS CODE BASED ON A GIVEN CONDITION

  console.log("USER", user);
  console.log("TOKEN", token);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          /* SPOTIFY LOGO */
          <Login/>    
        )
      }
      
    </div>
  );
}

export default App;
