import React, { useEffect } from 'react';
import Line_Graph from './Line_Graph';
import { getEventById } from '../data/DataHandler';

// Component to display an event on the main page, including a line graph of the betting odds over time
function MainPageEvent({ eventId, eventName }) {
  const [eventData, setEventData] = React.useState([]);

  useEffect(() => {
    const fetchEvents = () => {
      try {
        const data = getEventById(eventId);
        setEventData(data ?? []);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };
    fetchEvents();
  }, [eventId]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px', width: '33%', height: '33%' }}>
      <h2 style={{textAlign: 'center'}}>{ eventName }</h2>
      <div style={{ maxWidth: '600px', marginBottom: '16px'}}>
        <Line_Graph eventData={eventData} />
          <button key={eventId} onClick={() => goToEvent(eventId, eventName)} style={{ textAlign: 'center' }}>
            {eventName}
          </button>
      </div>
    </div>
  )

}

export default MainPageEvent;
