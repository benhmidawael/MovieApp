import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import React, { useState } from 'react'

import MovieList from './Component/MovieList';
import Navigation from './Component/Navigation';

function App() {
  const [movies, setMovies] = useState([
    {
      name: "John Wick",
      posterurl:
        "https://cdn.wallpapersafari.com/28/37/CvKqdo.jpg",
      description:
        "John Wick and his attempt to hunt down the men who broke into his home, stole his vintage car, and killed his puppy, which was a last gift to him from his recently deceased wife.",
      rating: 4,
    },
    {
      name: "Oppenheimer",
      posterurl: "https://movies.universalpictures.com/media/03-opp-dm-mobile-banner-1080x745-pl-f01-062122-62defaa505f81-1.jpg",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      rating: 4,
    },
    {
      name: "The Circle",
      posterurl:
        "https://img.republicworld.com/republic-prod/stories/images/15982586965f437e08b6fa9.jpeg",
      description:
        "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.",
      rating: 2,
    },
    {
      name: "Inception",
      posterurl:
        "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Inception-characters-film-crew.jpg",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: 3,
    },
    {
      name: "Bastardo",
      posterurl: 
      "http://cinematunisien.com/wp-content/uploads/2019/07/Bastardo_band2-678x266.jpg",
      description:
        "The story depicts the journey of man from being a nobody, who is cursed and looked down upon everyday to one of the most powerful revered or feared persons in the city.",
      rating: 3,
    },
    {
      name: "Warcraft",
      posterurl:
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-243610-8J07_WF0170_COMP_143639R_G_SRGB_000000_HR.jpg",
      description:
        "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
      rating: 1,
    },
    {
      name: "The Godfather",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0._V1_UX477_CR0,0,477,268_AL_.jpg",
      description:
        "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo.",
      rating: 5,
    },
    {
      name: "Taxi Driver",
      posterurl:
        "https://www.indiewire.com/wp-content/uploads/2016/04/taxi-driver-1.jpg?w=670&h=377&crop=1",
      description:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
      rating: 3,
    },
    {
      name: "Fight Club",
      posterurl:
        "https://img.huffingtonpost.com/asset/5bb49916220000ba01dc2840.jpeg?ops=scalefit_630_noupscale",
      description:
        "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
      rating: 5,
    },
    {
      name: "The Lord of the Rings",
      posterurl:
        "https://imgix.bustle.com/uploads/image/2020/1/21/7f69561d-3863-4b82-8196-f6bfd3074f03-lord-of-the-rings-frodo-sam-ftr.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
      description:
        "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
      rating: 5,
    },

    {
      name: "Dachra",
      posterurl:
        "https://cdn.nawaat.org/wp-content/uploads/2018/11/DACHRA-3-2000px.jpg",
      description:
        "A young journalism student and her friends become trapped in an isolated village while trying to solve a gruesome criminal case that is over 25 years old.",
      rating: 5,
    },
    {
      name: "Paper Lives",
      posterurl:
        "http://www.doyouknowturkey.com/wp-content/uploads/2021/02/C%CC%A7ag%CC%86atay-Ulusoy-is-acting-as-Mehmet-in-Kag%CC%86ittan-Hayatlar-Papar-Lives-Turkish-original-film-on-Netflix.jpg",
      description:
        "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood, where he helps everyone in need, especially homeless children and teenagers. One day, Mehmet meets a homeless 8-year-old boy who changes his life.",
      rating: 2,
    },
  ]);
  const [search, setSearch] = useState("")
  const [stars, setStars] = useState("")

  const addMovie = (newmovie) => {
    setMovies([...movies, newmovie]);
  };

  return (
    <>
      <Navigation setStars={setStars} setSearch={setSearch} addMovie={addMovie}/>
      <div className='app'>
        <MovieList movies={movies} search={search} stars={stars}/>
      </div>
    </>
  );
}

export default App;
