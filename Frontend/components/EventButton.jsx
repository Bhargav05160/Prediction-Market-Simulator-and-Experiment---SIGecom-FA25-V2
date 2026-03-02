import { useState } from 'react';
// Button component for transitioning from main page to event page and back
function EventButton({ onClick, text }) {
  const [btnHovered, setBtnHovered] = useState(false);
  return (
    <button onClick={onClick} style={{...styles.button, backgroundColor: btnHovered ? '#e0e0e0' : 'transparent'}}
      onMouseEnter={() => setBtnHovered(true)}
      onMouseLeave={() => setBtnHovered(false)}
    >
      {text}
    </button>
  );
}

const styles = {
    button: {border: '1px solid #ccc', padding: '8px 16px', backgroundColor: '#f0f0f0', cursor: 'pointer', marginTop: '16px'}

};

export default EventButton;