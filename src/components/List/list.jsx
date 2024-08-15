import { useState } from "react";
import closed from "./close.png";
import stylPeople from "./module.styles.css";

function List() {
  const [people, setPeople] = useState([
    { id: 1, name: "Иван", age: 20 },
    { id: 2, name: "Мария", age: 22 },
    { id: 3, name: "Алексей", age: 21 },
    { id: 4, name: "Марина", age: 19 },
    { id: 5, name: "Даша", age: 23 },
    { id: 6, name: "Глеб", age: 24 },
    { id: 7, name: "Дима", age: 18 },
    { id: 8, name: "Гриша", age: 20 },

  ]);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className={stylPeople.listPeople}>
      <h2>Список приглашенных</h2>
      <ul className={stylPeople.ulPeople}>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} (Возраст: {person.age})
            <button onClick={() => removePerson(person.id)}>
              <img
                className={stylPeople.imgPeople}
                src={closed}
                alt="closed"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;