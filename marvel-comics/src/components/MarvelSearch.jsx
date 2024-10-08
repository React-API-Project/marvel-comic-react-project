// src/components/MarvelSearch.jsx
import { useCharacter } from '../App'; // Adjust the import path as needed
import CharacterDisplay from './CharacterDisplay';
import { useState, useEffect } from 'react';
import fetchData from '../components/Fetch.jsx';


const MarvelSearch = () => {
    const [query, setQuery] = useState(''); // Default query
    const { error, characters, setError, setCharacters } = useCharacter();
    const API_KEY = import.meta.env.VITE_API_KEY;
    const HASH = import.meta.env.VITE_HASH;




    console.log(API_KEY)

    const handleSearch = (e) => {
        e.preventDefault();
        const newQuery = e.target.elements.query.value.trim();

        setQuery(newQuery);
    };

    const API_URL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${API_KEY}&hash=${HASH}&name=${query}`;

    useEffect(() => {
        const fetchCharacters = async () => {
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
            }
        };

        if (query) {
            fetchCharacters();
        }
    }, [query]); // Fetch new data when query changes
    //testing
    return (
        <>
            <form onSubmit={handleSearch}>
                <input className="inputBar" type="text" name="query" placeholder="Search for a character" />
                <button className="search-button" type="submit">Search</button>
            </form>

            {/* {loading && <p>Loading in progress...</p>}Display loading message */}

            {error && <p className="error">{error}</p>} {/* Render error message if there's an error */}
            {characters.length === 0 && !error && <p></p>}
            <div className="search-description">
                {/* <p>*Due to API restrictions use simple MARVEL hero names!* </p> */}
            </div>
            <CharacterDisplay /> {/* Render the CharacterDisplay component */}
        </>
    );
};

export default MarvelSearch;
