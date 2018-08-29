import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{ title }</h1>
                <div className="Movie__Genres">
                    { genres.map((genres,index) => <MovieGenre genres={genres} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis 
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MovieGenre({genres}){
    return (
        <span className="Movie__Genre">{ genres } </span>
    )
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
    )
}



Movie.PropTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    gneres: PropTypes.string.isRequired,
    sysnopsis: PropTypes.string.isRequired

}

MoviePoster.PropTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

MovieGenre.PropTypes = {
    genres: PropTypes.string.isRequired
}

export default Movie;