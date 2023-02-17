import React from 'react'
import './../style.css';
import ReactStars from 'react-stars'

const MovieCard = ({ el }) => {
  return (
    <>
      <div className='MovieBox'>
        <img src={el.posterurl} />
        <h4>{el.name}</h4>
        <p>{el.description}</p>
        <ReactStars
          className='stars'
          edit={false}
          count={5}
          value={el.rating}
          color2={'#ffd700'} />
      </div>

    </>
  )
}

export default MovieCard