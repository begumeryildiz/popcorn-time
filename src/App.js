import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import moviesArray from "./data/movies.json"
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState(moviesArray);

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {

        const newList = prevMovies.filter((element) => {
            return element.id === movieId ? false : true;
            // return element.id === movieId; // same thing
        });

        return newList;
    });
}

//         const newList = prevMovies.filter((element)) => {
//             if (element.id === movieId) {
//                 return false;
//             } else {

//             }
//         })            
//     })
// }

  return (
    <>
      <Header numberOfMovies={movies.length}/>
      <Main movies={movies} callbackToDelete={deleteMovie}/>
      <Footer />
    </>
  );
}

export default App;
