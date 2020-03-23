import React, { Component } from 'react';
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import SearchPage from './searchpage.js';
import LoginPage from './components/login/loginpage.jsx';
import HomePage from './components/pages/homepage.js';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import { NavBar } from './components/NavBar';




class App extends Component {

    render() {
        return ( < Router >
            <
            div > <
            NavBar / >
            <
            switch >
            <
            Route path = "/Home"
            component = { HomePage }
            /> <
            Route path = "/login"
            component = { LoginPage }
            />  </switch > < /div > < /Router >
        );
    }
}

export default App;