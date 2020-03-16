import React from 'react'

class MovieRow extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url

    }

    saveMovie() {
        var filmID = this.props.movie;
        alert(filmID.title + " Saved!")
        console.log(filmID.id)
    }


    render() {
        return <table key = { this.props.movie.id } >
            <
            tbody >
            <
            tr >
            <
            td >
            <
            img alt = "film poster"
        width = "80"
        src = { this.props.movie.poster_src }
        /> < /
        td > <
            td > < h3 > { this.props.movie.title } < /h3>  < p > { this.props.movie.overview } < /p > <
            input type = "button"
        onClick = { this.viewMovie.bind(this) }
        value = "View" / > <
            input type = "button"
        onClick = { this.saveMovie.bind(this) }
        value = "Save" / > < /
        td > < /
        tr > <
            /tbody> < /
        table >
    }
}

export default MovieRow;