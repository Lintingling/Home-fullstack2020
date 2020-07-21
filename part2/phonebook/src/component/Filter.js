import React, { useState } from "react";

const Filter = ({ persons }) => {
  const [filterPersons, setNewPersons] = useState([]);
  const handleFilterPersons = (event) => {
    setNewPersons(
      persons.filter((person) =>
        person.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      filter shown with <input onChange={handleFilterPersons} />
      {filterPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Filter;
