import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return ( <
            div className = "nav has-shadow" >
            <
            div clasName = "container" >
            <
            div className = "nav-left" >
            <
            a className = "nav-item" > The BASED Film Database < /a> < /
            div >

            <
            span className = "nav-toggle" > <
            span > < /span> <
            span > < /span> <
            span > < /span> < /
            span >

            <
            div className = "nav-right nav-menu" >

            <
            Link to = "/"
            className = "nav-item r-item" > Home < /Link>

            <
            Link to = "/login"
            className = "nav-item r-item" > Login / Register < /Link>

            <
            div className = "nav-item" >
            <
            p className = "control" >
            <
            a className = "button is-primary is-outlined" >
            <
            span className = "icon" >
            <
            i className = "fa fa-download" > < /i> < /
            span > <
            span > Join Now < /span> < /
            a > <
            /p> < /
            div >

            <
            /div> < /
            div > <
            /div>

        );
    }
}

export default Header;