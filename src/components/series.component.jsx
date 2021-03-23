import React from "react";
import defaultSeries from '../default-data/default.series';
const SeriesList = (props) => {
  const FavouriteComponent = props.favComponent;
  const series= props.movies.filter(movie=> movie.Type=='series');
    console.log(defaultSeries);
    console.log(series);
    if(series&&series.length>0){
  return (
      
    <>
      {series.map((movie, index) => (
        <div key={movie.imdbID} className="image-container d-flex justify-content-start m-3">
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
            {defaultSeries.map((movie, index) => (
              <div key={movie.imdbID} className="image-container d-flex justify-content-start m-3">
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

export default SeriesList;
