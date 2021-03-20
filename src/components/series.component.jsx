import React from "react";

const SeriesList = (props) => {
  const FavouriteComponent = props.favComponent;
  const series= props.movies.filter(movie=> movie.Type=='series');
    console.log(series);
  return (
      
    <>
      {series.map((movie, index) => (
        <div className="image-container d-flex justify-content-start m-3">
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
};

export default SeriesList;
