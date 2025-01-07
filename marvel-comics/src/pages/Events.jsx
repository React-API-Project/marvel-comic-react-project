import '../App.css';
import { useState, useEffect } from 'react';
import fetchData from '../components/Fetch.jsx';
import EventDisplay from '../components/EventDisplay.jsx'
import { useEvent } from '../App';
import { useParams } from 'react-router-dom';
import CharacterDisplay from '../components/CharacterDisplay.jsx';


const Events = () => {

  const API_KEY = import.meta.env.VITE_API_KEY;
  const HASH = import.meta.env.VITE_HASH;


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { events, setEvents, setError: setContextError } = useEvent(); // through context grab EventDisplay
  const { characterId } = useParams()

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        // Fetch comics for the selected character
        const eventsURL = `http://gateway.marvel.com/v1/public/characters/${characterId}/events?ts=1&apikey=${API_KEY}&hash=${HASH}`;
        const eventsResponse = await fetchData(eventsURL);
        const eventsData = eventsResponse.data.results;

        if (eventsData.length > 0) {
          setEvents(eventsData);
          setContextError('');
        } else {
          setEvents([]);
        }
      } catch (error) {
        setContextError(error.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [characterId]); // Empty dependency array means this effect runs once on component mount
  // ^^^^ it was empty[]
  return (
    <>
      <p>Surprise! The character you just clicked participated in the events below.</p>
      {loading && <p>Loading in progress... </p>}

      {error && <p className="error">{error}</p>}
      {!loading && !error && events && <p></p>}
      <EventDisplay />
    </>
  );
};

export default Events;
