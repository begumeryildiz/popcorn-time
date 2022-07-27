import "./Movie.css"

// props = {title,rating, imgURL}
function Movie(props) {
    return (
        <div className="Movie">
            <h2>Title: {props.title}</h2>
            <h3>Rating: {props.rating}</h3>
            <h3>Year: {props.year}</h3>

            {props.imgURL
                ? <img src={props.imgURL} alt={props.title} />
                : <p>Sorry, no image</p>
            }

            {/* {condition && <p>something</p>} */}

            {/* {movie.imgURL && <img src={movie.imgURL} alt={movie.title} />} */}

            <button onClick={() =>  {props.callbackToDelete(props.id)}}>Delete</button>
        </div>
    );
}

export default Movie;