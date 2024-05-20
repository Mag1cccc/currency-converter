export default function App() {
  return (
    <div className="container">
      <input type="text" placeholder="Enter amount" />
      <select>
        <option value="USD"> USD </option>
        <option value="EUR"> EUR </option>
        <option value="CAD"> CAD </option>
        <option value="INR"> INR </option>
      </select>
      <span>➡️</span>
      <select>
        <option value="USD"> USD </option>
        <option value="EUR"> EUR </option>
        <option value="CAD"> CAD </option>
        <option value="INR"> INR </option>
      </select>
      <p>OUTPUT</p>
    </div>
  );
}
