import Movie from "./Movie";

function Main(props) {

    return (
        <div className="Main">

           

            {props.movies.map((movie, index) => {
                return (
                    // render Movie object, passing props with JSX spread attributes
                    <Movie key={index} {...movie} callbackToDelete={props.callbackToDelete} />
                )
            })}
        </div >
    );
}

export default Main;
