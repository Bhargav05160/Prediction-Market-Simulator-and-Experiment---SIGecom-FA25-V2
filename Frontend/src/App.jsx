import { useState, useEffect } from 'react'
import EventPage from './EventPage';
import Line_Graph from '../components/Line_Graph';
import { getEvents } from '../data/DataHandler';
import MainPageEvent from '../components/MainPageEvent';
import MainHeader from '../components/MainHeader';
import Note from './Note';

// Main page of the webapp

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

  // Function to navigate to an event page when an event is clicked on the main page
  // Passed into the MainPageEvent component, which then calls the function when the button is pressed.
  function goToEvent(id, name) {
    setEventId(id);
    setPage('event');
    setEventName(name);
  }

  if (page === 'event') return (
    <div>
      <MainHeader goHome={() => setPage('home')} />
      <EventPage onNavigate={setPage} eventId={eventId} eventName={eventName} />
    </div>
  );

  if (page === 'info') return (
    <div>
      <MainHeader goHome={() => setPage('home')} />
      <Note />
    </div>
  )
  // Add a header to diff pages like info/privacy_notes
  return (
    <div>
      <MainHeader goHome={() => setPage('home')} />

      <div style={{ textAlign: 'center', fontSize: '1.5em', marginBottom: '16px' }}>
        SigEcom text text text SigEcom
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 500px)', gap: '16px', margin: '0 auto', width: 'fit-content' }}>
        {events.map(event => (
          <MainPageEvent key={event.id} eventId={event.id} eventName={event.name} goToEvent={goToEvent} />
        ))}
      </div>
    </div>
  )
}

const styles = {

}

export default App
