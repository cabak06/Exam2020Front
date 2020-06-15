import React, { useState } from "react";
import settingUrl from "./settings";

export function MovieInfoAll() {

  const movieInfoObj = {
    title:"",
    year: "",
    cast:"",
    directors:"",
    genres:"",
    plot:"",
    poster:"",
    imdb:{imdbRating:"",imdbVotes:""},
    metacritic:{metacritic:""}
  } 

  const [movieTitle, setTitle] = useState("");
  const [movieInfo, setMovieInfo] = useState(movieInfoObj);

  const URL = settingUrl.movieInfoApiAll(movieTitle.title);

  const getToken = () => {
    return localStorage.getItem('jwtToken')
  }
  
  function fetchMovieInfoAllApi() {
    let options = {
      'method': 'GET',
      'headers': {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-access-token': getToken()
      }
    };
    fetch(URL, options)
      .then(res => res.json())
      .then(data => {
       setMovieInfo(data);
      });
  }

  const onChange = (evt) => {
    setTitle({ title: evt.target.value });
  };

  return (<div>
    <h1>Movie info alle API</h1>
    <input placeholder="Søg på titel"  onChange={onChange} /> <br/>
    <button onClick={fetchMovieInfoAllApi}>Hent movie info alle</button>
    {movieInfo.title && <div>
      <h2>Titel</h2>
      <p>{movieInfo.title}</p>
      <h2>Year</h2>
      <p>{movieInfo.year}</p>
      <h2>Cast </h2>
      <p>{movieInfo.cast}</p>
      <h2>Directores</h2>
      <p>{movieInfo.directors}</p>
      <h2>Genres</h2>
      <p>{movieInfo.genres}</p>
      <h2>Plot</h2>
      <p>{movieInfo.plot}</p>
      <h2>Poster</h2>
      <p>{movieInfo.poster}</p>
      <h2>Imdb</h2>
      <p>Rating: {movieInfo.imdb.imdbRating} ,  Voting: {movieInfo.imdb.imdbVotes}  </p>
      <h2>Metacritic</h2>
      <p>{movieInfo.metacritic.metacritic} </p>
    </div>}
  </div>);
}
