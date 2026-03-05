// Input component for entering an amount of cents.
// State is managed by the parent - pass value and onChange as props.
function CentsInput({ label, currentPrice, buy, value, onChange, onSubmit }) {
  function handleChange(e) {
    const raw = e.target.value;
    if (raw === '') { onChange(''); return; }
    const num = Number(raw);
    if (num >= 0) onChange(num);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && onSubmit) onSubmit();
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <label>{currentPrice !== undefined ? `Current ${buy ? 'Buy' : 'Sell'} Price: ${currentPrice} cents` : 'ERROR NO PRICE'} </label>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter amount in cents"
        style={{ padding: '8px', width: '200px', textAlign: 'center' }}
      />
    </div>
  );
}

export default CentsInput;
