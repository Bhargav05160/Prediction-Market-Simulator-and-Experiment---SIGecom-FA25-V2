
// Button component for transitioning from main page to event page and back
function EventButton({ onClick, text }) {
  return (
    <button onClick={onClick} style={styles.button}>
      {text}
    </button>
  );
}

const styles = {
    button: {border: '1px solid #ccc', padding: '8px 16px', backgroundColor: '#f0f0f0', cursor: 'pointer', marginTop: '16px'}
};

export default EventButton;