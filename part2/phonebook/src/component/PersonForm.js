import React, { useState } from "react";
import personService from "../services/persons";

const PersonForm = ({ persons, setPersons, setNotification }) => {
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    const sameName = persons.find((person) => person.name === newName);
    if (sameName) {
      window.alert(`${newName} is already added to phonebook`);
    }
    if (sameName) {
      if (
        window.confirm(
          `${sameName.name} is already added to phonebook,replace the old number with a new one?`
        )
      ) {
        personService
          .update({ ...sameName, number: newNumber }, sameName.id)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.number !== newNumber ? person : response.data
              )
            );
          });

        setNewName("");
        setNewNumber("");
        setNotification({
          message: `updated phone number of ${sameName.name}`,
          type: "success",
        });
        setTimeout(() => setNotification(null), 5000);
      }
    } else {
      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
        setNotification({
          message: `Added ${newPerson.name}`,
          type: "success",
        });
        setTimeout(() => setNotification(null), 5000);
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
