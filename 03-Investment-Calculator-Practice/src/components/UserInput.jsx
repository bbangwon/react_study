export default function UserInput({ id, label, onValueChange, value }) {
  function handleValueChange(event) {
    onValueChange(id, event.target.value);
  }

  return (
    <p>
      <label>{label}</label>
      <input id={id} type="number" value={value} onChange={handleValueChange} />
    </p>
  );
}
