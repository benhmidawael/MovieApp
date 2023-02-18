import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import React, { useState } from 'react'

import MovieList from './Component/MovieList';
import Navigation from './Component/Navigation';

import ReactPlayer from 'react-player'

function App() {
  const [movies, setMovies] = useState([
    {
      name: "John Wick",
      trailerurl:
        "https://www.youtube.com/watch?v=qEVUtrk8_B4",
      description:
        "John Wick and his attempt to hunt down the men who broke into his home, stole his vintage car, and killed his puppy, which was a last gift to him from his recently deceased wife.",
      rating: 4,
    },
    {
      name: "Oppenheimer",
      trailerurl: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
      description:
        "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
      rating: 4,
    },
    {
      name: "The Circle",
      trailerurl:
        "https://www.youtube.com/watch?v=QCOXARv6J9k",
      description:
        "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.",
      rating: 2,
    },
    {
      name: "Inception",
      trailerurl:
        "https://www.youtube.com/watch?v=8hP9D6kZseM",
      description:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
      rating: 3,
    },
    {
      name: "Bastardo",
      trailerurl:
        "https://www.youtube.com/watch?v=4zUSKcHjbxU",
      description:
        "The story depicts the journey of man from being a nobody, who is cursed and looked down upon everyday to one of the most powerful revered or feared persons in the city.",
      rating: 3,
    },
    {
      name: "Warcraft",
      trailerurl:
        "https://www.youtube.com/watch?v=2Rxoz13Bthc",
      description:
        "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
      rating: 1,
    },
    {
      name: "The Godfather",
      trailerurl:
        "https://www.youtube.com/watch?v=UaVTIH8mujA",
      description:
        "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo.",
      rating: 5,
    },
    {
      name: "Taxi Driver",
      trailerurl:
        "https://www.youtube.com/watch?v=UUxD4-dEzn0",
      description:
        "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
      rating: 3,
    },
    {
      name: "Fight Club",
      trailerurl:
        "https://www.youtube.com/watch?v=qtRKdVHc-cE",
      description:
        "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
      rating: 5,
    },
    {
      name: "The Lord of the Rings",
      trailerurl:
        "https://www.youtube.com/watch?v=x8UAUAuKNcU",
      description:
        "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
      rating: 5,
    },

    {
      name: "Dachra",
      trailerurl:
        "https://www.youtube.com/watch?v=a5_WTF7KtYQ",
      description:
        "A young journalism student and her friends become trapped in an isolated village while trying to solve a gruesome criminal case that is over 25 years old.",
      rating: 5,
    },
    {
      name: "Paper Lives",
      trailerurl:
        "https://www.youtube.com/watch?v=lXdSaVK-vzs",
      description:
        "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood, where he helps everyone in need, especially homeless children and teenagers. One day, Mehmet meets a homeless 8-year-old boy who changes his life.",
      rating: 2,
    },
    {
      name: "Taxi 4",
      trailerurl:
        "https://www.youtube.com/watch?v=FVNzRNZDllI",
      description:
        "Daniel, le chauffeur d'un taxi très spécial à Marseille, fonce pour déposer à temps un célèbre footballeur au stade. Plus tard, il aide son ami policier maladroit Émilien à attraper un dangereux Belge qui a échappé à la garde de celui-ci.",
      rating: 3,
    },
    {
      name: "Conjuring 2 : Le Cas Enfield",
      trailerurl:
        "https://www.youtube.com/watch?v=VFsmuRPClr4",
      description:
        "Ed et Lorraine Warren se rendent dans le nord de Londres pour aider une mère célibataire, qui élève seule ses quatre enfants, à se débarrasser de l'esprit surnaturel qui tourmente sa maison.",
      rating: 5,
    },
    {
      name: "Dabbe: Zehr-i Cin",
      trailerurl:
        "https://www.youtube.com/watch?v=NdAcTXYCVtY",
      description:
        "Dilek, a housewife suddenly starts to feel presence of something abnormal in a specific room in their house. Though her husband, Omer refuses to agree with her but situation become worse. They find out that, an ancient paranormal creature called Jinn, has cursed on Dilek.",
      rating: 2,
    },
    {
      name: "Siccîn 3: Cürmü Ask",
      trailerurl:
        "https://www.youtube.com/watch?v=3S4te1wU3Dw",
      description:
        "Three infant friends are separated by a terrible accident but are reunited years later.",
      rating: 1,
    },
  ]);
  const [search, setSearch] = useState("")
  const [stars, setStars] = useState("")

  const addMovie = (newmovie) => {
    setMovies([...movies, newmovie]);
  };

  return (
    <>
      <Navigation setStars={setStars} setSearch={setSearch} addMovie={addMovie} />
      <div className='app'>
        <ReactPlayer
          className="player"
          width={"900px"}
          loop={true}
          url='https://www.youtube.com/watch?v=xl8zdCY-abw' />

        <MovieList movies={movies} search={search} stars={stars} />
      </div>
    </>
  );
}

export default App;
