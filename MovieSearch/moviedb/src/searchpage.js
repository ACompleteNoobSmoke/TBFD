import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.performSearch(" ")
    }


    performSearch(searchTerm) {
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US&query=" + searchTerm + "&page=1&include_adult=false"
        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched Data Successfully")
                const results = searchResults.results

                var movieRows = []

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
                    const movieRow = < MovieRow key = { movie.id }
                    movie = { movie }
                    />
                    movieRows.push(movieRow)
                })

                this.setState({ rows: movieRows })
            },
            error: (xhr, status, err) => {
                console.error("Failed To Fetch Data")
            }
        })

    }


    searchChangeHandler(event) {
        const searchTerm = event.target.value
        const boundObject = this
        boundObject.performSearch(searchTerm)
    }

    render() {
        return ( <
            div >

            <
            table className = "titleBar" >
            <
            tbody >
            <
            tr >
            <
            td >
            <
            img width = "50"
            src = "placeholder.svg" / > <
            /td> ><td width="8" / > <
            td >
            <
            h3 > MovieDB Search < /h3> < /
            td > < /
            tr > <
            /tbody> < /
            table >

            <
            input className = "searchBox"
            onChange = { this.searchChangeHandler.bind(this) }
            placeholder = "Search Film Title" / >

            { this.state.rows } <
            /div>
        );
    }
}

export default SearchPage;