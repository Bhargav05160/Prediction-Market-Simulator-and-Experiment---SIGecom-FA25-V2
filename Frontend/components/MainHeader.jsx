// Main Header for the webapp, displayed on every page and takes you to the main page
function MainHeader({ goHome }) {
  return (
    <header style={styles.header}>
        <button onClick={goHome}>Home Page</button>
    </header>
  )
}

const styles = {
    header: {textAlign: 'center', fontSize: '2em', fontWeight: 'bold'}
};

export default MainHeader;
