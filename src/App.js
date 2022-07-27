import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import moviesArray from "./data/movies.json"
import { useState } from "react";

function App() {

  const [movies, setMovies] = useState(moviesArray);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("")

  const deleteMovie = (movieId) => {
    setMovies((prevMovies) => {

      const newList = prevMovies.filter((element) => {
        //             if (element.id === movieId) {
        //                 return false;
        //             } else {}
        return element.id === movieId ? false : true;
        // return element.id === movieId; // same thing
      });

      return newList;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      // title: title,
      // rating: rating,
      // imgURL: imgURL
      title,
      rating,
      imgURL
    };

    setMovies( (prevMovies) => {
      return [newMovie, ...prevMovies];
    });

    // setMovies( (prevMovies) => {
    //   const copy = [...prevMovies];
    //   copy.unshift(newMovie);
    //   return copy;
    // });

  }

    return (
      <>
        <Header numberOfMovies={movies.length} />

        <div id="create">
          <form onSubmit={handleSubmit}>
            {/* e = event */}
            <input required type="text" name="title" placeholder="enter the title of the movie" value={title} onChange={(e) => { setTitle(e.target.value) }} />
            <input required type="number" name="rating"  min={0} max={10} placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} />
            <input type="text" name="imgURL" placeholder="the image url of the movie" value={imgURL} onChange={(e) => { setImgURL(e.target.value) }} />
            <button>Create</button>
          </form>
        </div>

        <Main movies={movies} callbackToDelete={deleteMovie} />
        <Footer />
      </>
    );
  }


export default App;
