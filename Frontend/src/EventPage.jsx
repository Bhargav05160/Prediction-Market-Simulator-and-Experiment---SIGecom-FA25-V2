import React, { useEffect } from 'react';
import { getEventById } from '../data/DataHandler';
import EventButton from '../components/EventButton';
import Line_Graph from '../components/Line_Graph';
import CentsInput from '../components/CentsInput';
import Terms_PopUp from '../components/Terms_PopUp';
import Order_PopUp from '../components/Order_PopUp';

// Page to display a specific event, including a line graph of the betting odds over time

function EventPage({ onNavigate, eventId, eventName }) {
  const [eventData, setEventData] = React.useState(null);
  const [buyCents, setBuyCents] = React.useState('');
  const [sellCents, setSellCents] = React.useState('');
  const [confirmMessage, setConfirmMessage] = React.useState('');
  const [confirmOpen, setConfirmOpen] = React.useState(false);

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
      <Order_PopUp isOpen={confirmOpen} onClose={() => setConfirmOpen(false)} closeButton_name="Confirm">
        <p>{confirmMessage}</p>
      </Order_PopUp>
      <h1>{ eventName }</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {eventData && <Line_Graph eventData={eventData} />}
      </div>
      <div style={{ marginTop: '10px', flexDirection: 'row', display: 'flex', justifyContent: 'center', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <CentsInput label="Buy (cents): " currentPrice={eventData ? eventData[0].data[eventData[0].data.length - 1].value : undefined} buy={true} value={buyCents} onChange={setBuyCents} onSubmit={() => { setConfirmMessage(`Buy ${buyCents} cents?`); setConfirmOpen(true); }} />
          <CentsInput label="Sell (cents): " currentPrice={eventData ? eventData[1].data[eventData[1].data.length - 1].value : undefined} buy={false} value={sellCents} onChange={setSellCents} onSubmit={() => { setConfirmMessage(`Sell ${sellCents} cents?`); setConfirmOpen(true); }} />
          <EventButton onClick={() => onNavigate('home')} text="Go to Home" />
        </div>
      </div>
    </div>
  )
}

export default EventPage;
