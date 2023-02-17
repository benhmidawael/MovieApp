import React from 'react'
import './../style.css';


import MovieCard from "./MovieCard";

const MovieList = ({ search, movies, stars }) => {


  return (
    <>
      <div className='MainBox'>
  {(parseInt(stars) > 0) ? (movies.filter((el) => el.rating === parseInt(stars) && el.name.toUpperCase().includes(search.toUpperCase())).map((el) => <MovieCard el={el} />)) : (movies.filter((el) => el.name.toUpperCase().includes(search.toUpperCase())).map((el) => <MovieCard el={el} />))}

  </div>

    </>
  )
}

export default MovieList