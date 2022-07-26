import "./Movie.css"

function Movie(props) {
    return (
        <div className="Movie">
                <h2>Title: {props.title}</h2>
                <h3>Rating: {props.rating}</h3>
        </div>
    );
}

export default Movie;