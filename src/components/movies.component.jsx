import React from "react";
import defaultMovies from '../default-data/movies.default';
const MovieList = (props) => {
  const FavouriteComponent = props.favComponent;
    if(props.movies!= undefined){
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          key={movie.imdbID}
          className="image-container d-flex justify-content-start m-3"
        >
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handlefavouriteClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
      }
      else{
         return (
           <>
             {defaultMovies.map((movie, index) => (
               <div
                 key={movie.imdbID}
                 className="image-container d-flex justify-content-start m-3"
               >
                 <img src={movie.Poster} alt="movie"></img>
                 <div
                   onClick={() => props.handlefavouriteClick(movie)}
                   className="overlay d-flex align-items-center justify-content-center"
                 >
                   <FavouriteComponent />
                 </div>
               </div>
             ))}
           </>
         );
      }
};

export default MovieList;
