import Movie from "./Movie";

function Main(props) {

    return (
        <div className="Main">

           

            {props.movies.map(movie => {
                return (
                    // render Movie object, passing props with JSX spread attributes
                    <Movie key={movie.id} {...movie} callbackToDeleteMovie={deleteMovie} />
                )
            })}
        </div >
    );
}

export default Main;
