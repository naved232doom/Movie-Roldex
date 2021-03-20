import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/movies.component";
import MovieHeading from "./components/movie-heading.component";
import SearchBox from "./components/search-box.component";
import AddFavourites from "./components/add-favourites.component";
import RemoveFavourites from "./components/remove-favourites.component";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    // s parameter is used as search parameter in the search box
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e9d5800a`;
    // fetching data from omdbi api async function
    const response = await fetch(url);
    // converting response to json object
    const responseJSON = await response.json();
    console.log(responseJSON);
    if (responseJSON.Search) setMovies(responseJSON.Search);
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  const addFavourites = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };
  const removeFavourites = (movie) => {
    const newFavouriteList = favourites.filter(
      (curmovie) => curmovie.imdbID != movie.imdbID
    );
    setFavourites(newFavouriteList);
  };
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center  mt-4 mb-4">
        <div className="ml-4 mr-4">
          <MovieHeading heading="Movies"></MovieHeading>
        </div>

        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></SearchBox>
      </div>

      <div className="row">
        <MovieList
          movies={movies}
          favComponent={AddFavourites}
          handlefavouriteClick={addFavourites}
        />
      </div>
      <div className="row d-flex align-items-center  mt-4 mb-4">
        <div className="ml-4 mr-4">
          <MovieHeading heading="Favourites"></MovieHeading>
        </div>
      </div>

      <div className="row">
        <MovieList
          movies={favourites}
          favComponent={RemoveFavourites}
          handlefavouriteClick={removeFavourites}
        />
      </div>
    </div>
  );
};

export default App;
