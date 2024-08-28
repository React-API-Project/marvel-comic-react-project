import { useEvent } from '../App'; // Import the custom hook to access context


const EventDisplay = () => {
  const { events } = useEvent(); // Get the characters from context


  return (
    <>
    <h2 className="event-page-title">These are the events involving the charcter in the main page</h2>
      <div className="event-display">
        {events.map((event) => (
        <div className="event-card" key={event.id}>
          <h2 className="marvel-event-title">{event.title}</h2>
          <img
            className="event-image"
            src={`${event.thumbnail.path}.${event.thumbnail.extension}`} //extension ensures type is jpg,etc avoiding errors
            alt={event.name}
          />
        </div>
      ))}
    </div>
    </>
  );
};
export default EventDisplay;

