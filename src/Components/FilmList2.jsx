import React, { useState, useEffect } from 'react';
import MySingleFilm from './MySingleFilm';
import { ThreeDots } from 'react-loader-spinner';


const FilmList2 = () => {
  const [filmData, setFilmData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Aggiunto stato di caricamento
  const [error, setError] = useState(null);
  const searchQuery = "john";

  const filmDataFetch = async () => {
    setIsLoading(true); // Imposta il caricamento a true
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=4689a86b&s=${searchQuery}`);
      if (!response.ok) {
        throw new Error("Errore richiesta API");
      }
      const filmDataObj = await response.json();
      setFilmData(filmDataObj.Search);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false); // Imposta il caricamento a false quando finisci
    }
  };

  useEffect(() => {
    filmDataFetch();
  }, []); 

  if (isLoading) {
    // Mostra il loader quando i dati sono in fase di caricamento
    return <ThreeDots type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }

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
