import "./App.css";
import Greeter from "./components/Greeter";

function App() {
  const person = {
    name: "lars",
    city: "bergen",
  };

  const TraditionalName = person.name;
  const TraditionalCity = person.city;

  const { name } = person;

  console.log("trad", TraditionalName);
  console.log("des", name);

  return (
    <>
      <Greeter {...person} />
    </>
  );
}

export default App;
