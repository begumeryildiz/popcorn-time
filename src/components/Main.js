import moviesArray from "../data/movies.json"
import "./Main.css"

function Main() {

    

    return (
        <div className="Main">

            {moviesArray.map(movie => {
                return (
                    <div key={movie.id} className="movie">
                        <h2>Title: {movie.title}</h2>
                        <h3>Rating: {movie.rating}</h3>
                    </div>)
            })}

        </div >
    );
}

export default Main;
