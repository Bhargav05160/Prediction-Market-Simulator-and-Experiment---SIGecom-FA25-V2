// Input component for entering an amount of cents.
// State is managed by the parent - pass value and onChange as props.
function CentsInput({ label, value, onChange }) {
  function handleChange(e) {
    const raw = e.target.value;
    if (raw === '') { onChange(''); return; }
    const num = Number(raw);
    if (num >= 0) onChange(num);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        placeholder="Enter amount in cents"
        style={{ padding: '8px', width: '200px', textAlign: 'center' }}
      />
    </div>
  );
}

export default CentsInput;
