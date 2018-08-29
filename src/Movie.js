import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}){
    return(
        <div>
            <MoviePoster poster={poster}/>
            <h1> { title } </h1>
        </div>
    )
}
function MoviePoster({poster}){
    return(
        <img src={poster} alt="Moive Poster"/>
    )
}
MoviePoster.PropTypes = {
    poster: PropTypes.string.isRequired
}
Movie.PropTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.is
}
export default Movie;