export default function Greeter({ name, city }) {
  return (
    <div className="greeter-wrapper">
      <h3>hei på dei {name}</h3>
      <h2>ser du bor i {city}</h2>
    </div>
  );
}
