import React, { useEffect } from 'react';
import { getEventById } from '../data/DataHandler';
import EventButton from '../components/EventButton';
import Line_Graph from '../components/Line_Graph';
import CentsInput from '../components/CentsInput';

// Page to display a specific event, including a line graph of the betting odds over time

function EventPage({ onNavigate, eventId, eventName }) {
  const [eventData, setEventData] = React.useState(null);
  const [buyCents, setBuyCents] = React.useState('');
  const [sellCents, setSellCents] = React.useState('');

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
    <div style={{ textAlign: 'center' }}>
      <h1>{ eventName }</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {eventData && <Line_Graph eventData={eventData} />}
      </div>
      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <CentsInput label="Buy (cents):" value={buyCents} onChange={setBuyCents} />
        <CentsInput label="Sell (cents):" value={sellCents} onChange={setSellCents} />
        <EventButton onClick={() => onNavigate('home')} text="Go to Home" />
      </div>
    </div>
  )
}

export default EventPage
