import React, { useEffect } from 'react';
import { getEventById } from '../data/DataHandler';
import EventButton from '../components/EventButton';

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
    <div >
      <h1>{ eventName }</h1>
      <EventButton onClick={() => onNavigate('home')} text="Go to Home" />
      <p>Event ID: {eventId} </p>
    </div>
  )
}

export default EventPage
