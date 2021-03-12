import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Mail from "./Components/Mail";
import MailList from "./Components/MailList";
import SendMail from "./Components/SendMail";
import {useDispatch, useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice";
import { login, selectUser } from './features/userSlice';
import Login from "./Components/Auth/Login";
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user)
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        }))
    })
  }, []);

  return (
    <Router>
      {!user ? (
        <Login/>
      ) : (
        <div className="app">
          <Header/>
          <div className="app__body" >
            <Sidebar/>
            <Switch>
              <Route path="/mail" >
                <Mail/>
              </Route>    
              <Route path="/" >
                <MailList/>
              </Route>    
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail/>}
        </div>
      )}
    </Router>
  );
}

export default App;
