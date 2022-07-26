import { useState } from "react";
import moviesArray from "../data/movies.json"
import "./Main.css"

function Main() {

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


    let message;

    if(movies.length > 0) {
        message = <h2>There's {movies.length} amount of movies in our DB</h2>;
    } else {
        message = <h2>No movies.... 😔</h2>
    }

    return (
        <div className="Main">

            {message}

            {movies.map(movie => {
                return (
                    <div key={movie.id} className="movie">
                        <h2>Title: {movie.title}</h2>
                        <h3>Rating: {movie.rating}</h3>

                        {/* {condition && <p>something</p>} */}

                        {/* {movie.imgURL && <img src={movie.imgURL} alt={movie.title} />} */}

                        { movie.imgURL 
                            ? <img src={movie.imgURL} alt={movie.title} />
                            : <p>Sorry, no image</p>
                        }



                        <button onClick={() => { deleteMovie(movie.id) }}>Delete</button>
                    </div>)
            })}

        </div >
    );
}

export default Main;
