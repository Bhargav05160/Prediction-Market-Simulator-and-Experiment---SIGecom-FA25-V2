import React, { useEffect } from 'react';
import { getEventById } from '../data/DataHandler';

// Page to display a specific event, including a line graph of the betting odds over time
function EventPage({ onNavigate, eventId, eventName }) {
  const [eventData, setEventData] = React.useState(null);

  useEffect(() => {
    const fetchEvents = () => {
      try {
        const data = getEventById(eventId);
        setEventData(data);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    fetchEvents();
  }, [eventId]);

  return (
    <div>
      <h1>{ eventName }</h1>
      <button onClick={() => onNavigate('home')}>Go to Home</button>
      <br />
      <p>Event ID: {eventId} </p>
    </div>
  )
}

export default EventPage
