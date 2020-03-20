import React, { Component } from 'react';


class Header extends Component {
    render() {
        return ( <
            div className = "nav has-shadow" >
            <
            div className = "container" >
            <
            div className = "nav-left" >
            <
            a className = "nav-item" > The BASED Film Database < /a> < /
            div >

            <
            span className = "nav-toggle" >
            <
            span > < /span> <
            span > < /span> <
            span > < /span> < /
            span >

            <
            div className = "nav-right nav-menu" >
            Routers

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
            div > <
            /div> < /
            div > <
            /div> 



        )
    }
}

export default Header;