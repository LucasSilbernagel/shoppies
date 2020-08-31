import React, { useState, useEffect } from "react";
import SearchResults from './SearchResults';

function Main () {
  const [movie, setMovie] = useState({});
  const [searched, setQuery] = useState({});
  const [inputValue, setInputValue] = useState("");

  const performSearch = (query = `${searched}`) => {
    fetch(`http://www.omdbapi.com/?t=${query}&apikey=640dab7`)
      .then(response => response.json())
      .then(res => setMovie(res))
  }

  useEffect(() => {
    performSearch();
  });

  const handleChange = (event) => {
    setQuery(event.target.value)
    setInputValue(event.target.value)
  }

  return (
    <main>
      <div className="wrapper">
        <h2>Welcome to the Shoppies, Shopify's official movies awards! Search for and nominate up to five movies, and check out the list of nominees!</h2>
        <form action="#">
          <label htmlFor="movieTitle">Movie title
            <input onChange={handleChange} type="text" name="movieTitle" id="movieTitle"/>
          </label>
        </form>
        <ul className="results" id="results">
          {/* Search results go here */}
          <SearchResults />
        </ul>
        <ul className="nominations" id="nominations">
          {/* Nominations go here */}
            
        </ul>

      </div>
    </main>
  );
};

export default Main;