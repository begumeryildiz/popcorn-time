import moviesArray from "../data/movies.json"
import Movie from "./Movie";

function Main() {

    

    return (
        <div className="Main">

            {moviesArray.map(movie => {
                return (
                    <Movie
                        title={movie.title}
                        rating={movie.rating}
                    />
                )
            })}

        </div >
    );
}

export default Main;
