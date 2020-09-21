import React, {useEffect} from 'react';
import './App.css';
import Header from "./Component/Header";
import Home from "./Component/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Component/Checkout';
import Login from "./Component/Login";
import {auth} from "./firebase";
import { useDataLayerValue } from './DataLayer/StateProvider';
import Payment from './Component/Payment';


function App() {
	const [{}, dispatch] = useDataLayerValue();

	useEffect(() => {
		// LISTENER
		auth.onAuthStateChanged(authUser => {
			console.log(authUser);
			if(authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null
				});
			}
		})
	}, []);

  	return (
    <Router>
			<div className="app">
				<Switch>
					<Route path="/checkout">
						<Header/>
						<Checkout/>
					</Route>
					<Route path="/login">
						<Login/>
					</Route>
					<Route path="/payment">
						<Header/>
						<Payment/>
					</Route>
					<Route path="/">
            			{/* HOME */}
						<Header/>
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
