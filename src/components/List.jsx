import { people } from "../data/people";
import Greeter from "./Greeter";

export default function List() {
  people.map((person, index) => {
    console.log(person, index);
  });

  return (
    <>
      {people.map((person, i) => (
        <Greeter key={i} {...person} />
      ))}
    </>
  );
}
