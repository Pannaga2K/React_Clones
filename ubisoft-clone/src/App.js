import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body/Body";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {db} from "./firebase";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    db.collection("games").onSnapshot((snapshot) => {
      console.log(snapshot);
      setGames(snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()  
      })));
    });
  }, []);

  console.log(games[0]?.id);

  return (
      <div className="app">
        <Header className="app__header" />
        <div className="app__body">
              <Body games={games}/>
        </div>
        <Footer className="app__footer"/>
      </div>
  );
}

export default App;
