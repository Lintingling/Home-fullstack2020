import React from "react";
import personService from "../services/persons";

const Person = ({ person, setPersons, setNotification }) => {
  const handleDeletePerson = (event) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then((response) => {
          setNotification({
            message: `Deleted ${person.name}`,
            type: "success",
          });
          setTimeout(() => setNotification(null), 5000);
        })
        .catch((error) => {
          setNotification({
            message: `Information of ${person.name} has already been removed from server`,
            type: "error",
          });
        });
      personService.getAll().then((response) => {
        setPersons(response.data);
      });
      setTimeout(() => setNotification(null), 5000);
    }
  };

  return (
    <div>
      <p>
        {person.name}
        {person.number}
        <button onClick={handleDeletePerson}>delete</button>
      </p>
    </div>
  );
};

const Persons = ({ persons, setPersons, setNotification }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person
          key={person.name}
          person={person}
          setPersons={setPersons}
          setNotification={setNotification}
        />
      ))}
    </div>
  );
};

export default Persons;
