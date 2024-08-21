// src/App.jsx
import React, { useState, useEffect, createContext, useContext } from 'react';
import fetchData from './components/Fetch.jsx'; // Adjust the import path as needed
import { API_KEY, HASH } from './config.js';
import MarvelSearch from './components/MarvelSearch'; // Ensure this component is correctly imported
import './App.css';

// Create the context
const CharacterContext = createContext();

const App = () => {
  const [characters, setCharacters] = useState([]); // Change to an array to hold multiple characters
  const [error, setError] = useState('');
  const [query, setQuery] = useState('thor'); // Default query
  const [loading, setLoading] = useState(false); // Add loading state

  const API_URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&name=${query}`;

  // try-catch-finally structure
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true); // Set loading to true when starting fetch
      try {
        const data = await fetchData(API_URL);
        console.log(data);
        if (data.data.results.length > 0) {
          setCharacters(data.data.results); // Set the array of characters
          setError(''); // Clear any previous errors
        } else {
          setCharacters([]); // Clear characters if no results found
        }
      } catch (error) {
        setError(error.message);
        setCharacters([]); // Ensure characters is an empty array on error
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchCharacters();
  }, [query]); // Fetch new data when query changes

  const searchCharacter = (newQuery) => {
    setQuery(newQuery.trim());
  };

  return (
    <CharacterContext.Provider value={{ characters, error, searchCharacter }}>
      <div className="homepage">
        <h1 className="title">Marvel API React</h1>
        <MarvelSearch /> {/* Use MarvelSearch to handle the search */}
        {loading && <p>Loading in progress...</p>} {/* Display loading message */}
        {error && <p className="error">{error}</p>} {/* Render error message if there's an error */}
        {!loading && !error && !character && <p>No character found</p>} {/* Display if no character is found */}
        {character && (
          <div className="character-card">
            <h2>{character.name}</h2>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <h1>{character.text}</h1>
          </div>
        )}
      </div>
    </CharacterContext.Provider>
  );
};

// Create a custom hook to use the CharacterContext
const useCharacter = () => useContext(CharacterContext);

export default App;
export { useCharacter };
