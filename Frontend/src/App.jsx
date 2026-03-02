import { useState, useEffect } from 'react'
import EventPage from './EventPage';
import Line_Graph from '../components/Line_Graph';
import { getEvents } from '../data/DataHandler';
import MainPageEvent from '../components/MainPageEvent';
import MainHeader from '../components/MainHeader';
import Note from './Note';
import Terms_PopUp from '../components/Terms_PopUp';

// Main page of the webapp

function App() {
  const [page, setPage] = useState('home');
  const [eventId, setEventId] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [events, setEvents] = useState([]);
  const [popupOpen, setPopupOpen] = useState(!localStorage.getItem('visited'));

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

  function closeAgreementPopup() {
    localStorage.setItem('visited', 'true');
    setPopupOpen(false);
  }

  function goToTerms() {
    setPopupOpen(false);
    setPage('info');
  }

  return (
    <div>
      <MainHeader goHome={() => setPage('home')} />
      <Terms_PopUp isOpen={popupOpen} onClose={closeAgreementPopup} closeButton_name="I understand" >
        <h2>Welcome</h2>
        <p>
          By continuing, you agree to the{' '}
          <button onClick={goToTerms} style={{ background: 'none', border: 'none', color: '#1a56db', cursor: 'pointer', padding: 0, textDecoration: 'underline', fontSize: 'inherit' }}>
            terms
          </button>
          {' '}of this experiment.
        </p>
      </Terms_PopUp>

      {page === 'event' && (
        <EventPage onNavigate={setPage} eventId={eventId} eventName={eventName} />
      )}

      {page === 'info' && <Note />}

      {page === 'home' && (
        <>
          <div style={{ textAlign: 'center', fontSize: '1.5em', marginBottom: '16px' }}>
            SigEcom text text text SigEcom
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 500px)', gap: '16px', margin: '0 auto', width: 'fit-content' }}>
            {events.map(event => (
              <MainPageEvent key={event.id} eventId={event.id} eventName={event.name} goToEvent={goToEvent} />
            ))}
          </div>
        </>
      )}

      {/* DEV ONLY — remove before production */}
      <button
        onClick={() => { localStorage.removeItem('visited'); setPopupOpen(true); }}
        style={{ position: 'fixed', bottom: '12px', right: '12px', fontSize: '0.75em', opacity: 0.5 }}
      >
        [dev] show popup
      </button>
    </div>
  )
}

const styles = {

}

export default App
