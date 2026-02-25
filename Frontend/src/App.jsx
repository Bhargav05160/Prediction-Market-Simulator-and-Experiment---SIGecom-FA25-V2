import { useState, useEffect } from 'react'
import EventPage from './EventPage';
import Line_Graph from '../components/Line_Graph';
import { getEvents } from '../data/DataHandler';
import MainPageEvent from '../components/MainPageEvent';

function App() {
  const [page, setPage] = useState('home');
  const [eventId, setEventId] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      try {
        const data = getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  function goToEvent(id, name) {
    setEventId(id);
    setPage('event');
    setEventName(name);
  }

  if (page === 'event') return (
    <EventPage onNavigate={setPage} eventId={eventId} eventName={eventName} />
);

  return (
    <div>
      <h1>Home Site</h1>
      {events.map(event => (
        <MainPageEvent key={event.id} eventId={event.id} eventName={event.name} />
      ))}
    </div>
  )
}

export default App
