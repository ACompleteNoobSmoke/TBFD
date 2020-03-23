import React, { Component } from 'react';
import '../components/css/NavBarCSS.css';
import { Link } from 'react-router-dom';

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
            ul className = "nav-links" > < Link to = "/Home" >
            <
            li > Home < /li > < /Link > < Link to = '/login
            '><
            li > Login < /li > < /Link > <
            li > About < /li > <
            li > Contact Us < /li > < /
            ul > < div class = "burger" > <
            div className = "line1" > < /div> <
            div className = "line2" > < /div> <
            div className = "line3" > < /div> < /
            div > < /
            nav >
        )
    }
}

export default NavBar;