import React, { useEffect } from 'react';
import Line_Graph from './Line_Graph';
import { getEventById } from '../data/DataHandler';
import EventButton from './EventButton';

// Component to display an event on the main page, including a line graph of the betting odds over time
function MainPageEvent({ eventId, eventName, goToEvent }) {
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
    <div style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px', width: '100%' }}>
      <h2 style={{textAlign: 'center'}}>{ eventName }</h2>
      <div style={{ maxWidth: '600px', marginBottom: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Line_Graph eventData={eventData} />
          <EventButton key={eventId} onClick={() => goToEvent(eventId, eventName)} text={eventName} />
      </div>
    </div>
  )

}

const styles = {

};

export default MainPageEvent;
