import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { useDataLayerValue } from './StateProvider';
function App() {
  const [{user}, dispatch] = useDataLayerValue();
  
  return (
    <div className="app">
      {!user ? (
        // LOGIN
        <Login/>
      ) : (
        // BODY
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">  
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>
          </Switch>
        </Router>
        
      </div>
      )}
    </div>
  );
}

export default App;
