// Controlled popup component.
// The parent manages open/close state and passes isOpen + onClose as props.
// Use the children prop to put any content inside the popup.
//
// Example usage:
//   const [open, setOpen] = useState(false);
//   <button onClick={() => setOpen(true)}>Open</button>
//   <Terms_PopUp isOpen={open} onClose={() => setOpen(false)}>
//     <p>Hello!</p>
//   </Terms_PopUp>

import { useState } from 'react';

function Order_PopUp({ isOpen, onClose, children, closeButton_name }) {
  const [cclbtnHovered, setcclBtnHovered] = useState(false);
  const [buybtnHovered, setBuyBtnHovered] = useState(false);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay} >
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        {children}
        <div style={{ textAlign: 'center', marginTop: '16px',  }}>
          <button
            style={{ border: '1px solid #000000', borderRadius: '4px', padding: '8px 16px', backgroundColor: cclbtnHovered ? '#e0e0e0' : 'transparent' }}
            onClick={onClose}
            onMouseEnter={() => setcclBtnHovered(true)}
            onMouseLeave={() => setcclBtnHovered(false)}
          >
            Cancel
          </button>
          <button
            style={{ border: '1px solid #000000', borderRadius: '4px', padding: '8px 16px', backgroundColor: buybtnHovered ? '#e0e0e0' : 'transparent' }}
            onClick={onClose}
            onMouseEnter={() => setBuyBtnHovered(true)}
            onMouseLeave={() => setBuyBtnHovered(false)}
          >
            {closeButton_name}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    minWidth: '300px',
  },
};

export default Order_PopUp;
