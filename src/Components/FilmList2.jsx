/*
import { Component } from "react";
import MySingleFilm from "./MySingleFilm";

class FilmList2 extends Component {
  state = {
    searchQuery: "superman",
    filmData: [],
  };

  filmDataFetch = async () => {
    const apiKey = "a3f6210f";

    try {
      const respons = await fetch(`http://www.omdbapi.com/?s=${this.state.searchQuery}&apikey=${apiKey}`);
      if (!respons.ok) {
        throw new Error("Errore richiesta API");
      }
      const filmDataObj = await respons.json();
      this.setState({ filmData: filmDataObj.Search });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.filmDataFetch();
  }
  render() {
    return (
      <>
        <h4 className="text-white pb-2">{this.state.searchQuery.toUpperCase()}</h4>
        <div className="d-flex">
          {this.state.filmData.slice(0, 7).map((film, index) => (
            <MySingleFilm key={index} imageUrl={film.Poster} />
          ))}
        </div>
      </>
    );
  }
}

export default FilmList2;

*/



import React, { useState, useEffect } from 'react';
import MySingleFilm from './MySingleFilm';

const FilmList2 = () => {
  const [filmData, setFilmData] = useState([]);
  const [error, setError] = useState(null);
  const searchQuery = "john";

  const filmDataFetch = async () => {
    
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=4689a86b&s=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Errore richiesta API");
      }
      const filmDataObj = await response.json();
      setFilmData(filmDataObj.Search);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    filmDataFetch();
  }, []); // Dipendenza vuota per eseguire solo al montaggio

  return (
    <>
      {error && <div className="alert alert-danger">{error}</div>}
      <h4 className="text-white pb-2">{searchQuery.toUpperCase()}</h4>
      <div className="d-flex">
        {filmData.slice(0, 6).map((film, index) => (
          <MySingleFilm key={index} imageUrl={film.Poster} />
        ))}
      </div>
    </>
  );
};

export default FilmList2;
