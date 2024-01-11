import { Component } from "react";
import MySingleFilm from "./MySingleFilm";

class FilmList3 extends Component {
  state = {
    searchQuery: "Spider man",
    filmData: [],
  };

  filmDataFetch = async () => {
    

    try {
      const respons = await fetch(`http://www.omdbapi.com/?apikey=4689a86b&s=${this.state.searchQuery}`);
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
          {this.state.filmData.slice(0, 6).map((film, index) => (
            <MySingleFilm key={index} imageUrl={film.Poster} />
          ))}
        </div>
      </>
    );
  }
}

export default FilmList3;