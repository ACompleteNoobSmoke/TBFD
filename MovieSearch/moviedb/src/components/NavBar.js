import React, { Component } from 'react';
import '../components/css/NavBarCSS.css';

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1}s`;
            }
        });
        burger.classList.toggle('toggle');
    });




}




class NavBar extends Component {

    componentDidMount() {
        navSlide();
    }

    render() {



        return ( < nav >
            <
            div className = "logo" >
            <
            h4 > The BASED Film Database < /h4> < /
            div > <
            ul className = "nav-links" >
            <
            li > < a href = "#" > Home < /a></li >
            <
            li > < a href = "#" > Login / Register < /a></li >
            <
            li > < a href = "#" > About < /a></li >
            <
            li > < a href = "#" > Contact Us < /a></li >
            <
            /ul><div class = "burger" > <
            div className = "line1" > < /div> <
            div className = "line2" > < /div> <
            div className = "line3" > < /div> < /
            div > < /
            nav >
        )
    }
}

export default NavBar;