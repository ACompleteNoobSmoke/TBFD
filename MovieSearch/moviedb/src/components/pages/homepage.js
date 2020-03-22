import React, { Component } from 'react';

import Footer from '../footer.js';
import '../css/homepage.css'
import EnterTheDragon from '../images/EnterTheDragonPoster.jpg';
import RushHour from "../images/RushHourPoster.jpg";
import Spiderman2 from "../images/SpiderMan2Poster.jpg";
import TheMatrix from "../images/TheMatrixPoster.jpg";
import FightClub from "../images/FightClubPoster.jpg";
import PosterCollage from "../images/MoviePosterCollage.jpg";


class HomePage extends Component {
    render() {
        return (

            <
            div className = "slidershow middle" >
            <
            div className = "slides" >


            <
            input type = "radio"
            className = "r"
            id = "r1"
            checked / >
            <
            input type = "radio"
            className = "r"
            id = "r2" /
            >
            <
            input type = "radio"
            className = "r"
            id = "r3" /
            >
            <
            input type = "radio"
            className = "r"
            id = "r4" /
            >
            <
            input type = "radio"
            className = "r"
            id = "r5" /
            >
            <
            div className = "slide" >
            <
            img src = { PosterCollage }
            alt = " Poster" / >
            <
            /div >  <
            div className = "slide" >
            <
            img src = { EnterTheDragon }
            alt = "Enter The Dragon Poster" / >
            <
            /div >  <
            div className = "slide" >
            <
            img src = { TheMatrix }
            alt = "The Matrix Poster" / >
            <
            /div >  <
            div className = "slide" >
            <
            img src = { Spiderman2 }
            alt = "Spiderman 2 Poster" / >
            <
            /div >  <
            div className = "slide" >
            <
            img src = { FightClub }
            alt = "Fight Club Poster" / >
            <
            /div > < /
            div >
            <
            div className = "navigation" >
            <
            label
            for = "r1"
            className = "bar" > < /label> <
            label
            for = "r2"
            className = "bar" > < /label> <
            label
            for = "r3"
            className = "bar" > < /label> <
            label
            for = "r4"
            className = "bar" > < /label> <
            label
            for = "r5"
            className = "bar" > < /label> < /
            div > <
            /
            div >

        );
    }
}

export default HomePage;